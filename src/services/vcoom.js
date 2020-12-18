import * as VoxImplant from "voximplant-websdk";

import uuid from "uuid";
import axios from "axios";

const API = {
  url: null,
  tenant: null,
  get: async (url, timeout) => {
    try {
      const response = await axios.get(url, { timeout: timeout });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  post: async (url, body, timeout) => {
    try {
      const response = await axios.post(url, body, { timeout: timeout });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  login: async (id, name) => {
    let _id = "" + id;

    const body = {
      displayName: name,
      tenant: API.tenant,
    };

    if (_id.indexOf("@") >= 0) {
      body.email = _id;
    } else {
      _id = "00000000" + _id;
      body.id = _id.substr(_id.length - 8);
    }

    try {
      const response = await API.post(API.url + "users", body, 10000);

      await VComm.getInstance().login(response.id, name);

      return response.id;
    } catch (error) {
      throw error.message;
    }
  },
  logout: async () => {
    await VComm.getInstance().logout();
  },
};

export { API };

export default class VComm {
  static Events = {
    Connected: "CONNECTED",
    Logged: "LOGGED",
    CallStatus: "CALL_STATUS",
    LocalVideo: "LOCAL_VIDEO",
    RemoteVideo: "REMOTE_VIDEO",
    DataReceived: "DATA_RECEIVED",
    VideoRequested: "VIDEO_REQUESTED",
    VideoRejected: "VIDEO_REJECTED",
  };

  static CallStatus = {
    Calling: "CALLING",
    InCall: "IN_CALL",
    Failed: "FAILED",
    Declined: "DECLINED",
    Cancelled: "CANCELLED",
    Finished: "FINISHED",
    Ringing: "RINGING",
  };

  static options = {
    appName: null,
    account: null,
    tenant: null,
    api: null,
    iosBundle: null,
    androidBundle: null,
  };

  static instance = null;

  static config = (options) => {
    this.options = options;

    API.url = this.options.api;
    API.tenant = this.options.tenant;

    if (!API.url.endsWith("/")) {
      API.url += "/";
    }
  };

  static getInstance = () => {
    if (this.instance === null) {
      this.instance = new VComm();
      this.instance.client.init({
        micRequired: true,
        videoSupport: true,
        progressTone: true,
        localVideoContainerId: "localVideoContainer",
        remoteVideoContainerId: "remoteVideoContainer",
      });
    }

    return this.instance;
  };

  events = {};

  pushToken = "";

  client = null;
  call = null;

  callUUID = null;
  callInfo = null;

  userId = null;
  userName = null;

  inCall = false;
  calling = false;

  localVideoId = null;
  remoteVideoId = null;

  isMuted = false;

  isFrontCam = true;
  isSpeaker = true;

  isCaller = false;

  callStart = null;
  caller = null;
  callee = null;

  externalCall = false;

  media = null;

  constructor() {
    this.client = VoxImplant.getInstance();

    this.client.on(VoxImplant.Events.SDKReady, this.voximplant_client_sdkReady);
    this.client.on(
      VoxImplant.Events.AuthResult,
      this.voximplant_client_authResult
    );
    this.client.on(
      VoxImplant.Events.ConnectionEstablished,
      this.voximplant_client_connectionEstablished
    );
    this.client.on(
      VoxImplant.Events.ConnectionFailed,
      this.voximplant_client_connectionFailed
    );
    this.client.on(
      VoxImplant.Events.ConnectionClosed,
      this.voximplant_client_connectionClosed
    );
    this.client.on(
      VoxImplant.Events.IncomingCall,
      this.voximplant_client_incomingCall
    );
    this.client.on(
      VoxImplant.Events.RefreshTokenResult,
      this.voximplant_client_refreshTokenResult
    );
  }

  on = (name, listener) => {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push(listener);
  };

  off = (name, listener) => {
    if (!this.events[name]) {
      return;
    }

    this.events[name] = this.events[name].filter(
      (_listener) => _listener !== listener
    );
  };

  emit = (name, data) => {
    if (!this.events[name]) {
      return;
    }

    const fire = (callback) => {
      console.log(`VComm: ${name} => ${data}`);
      callback(data);
    };

    this.events[name].forEach(fire);
  };

  login = async (id, name) => {
    this.userId = id;
    this.userName = name;

    const state = await this.client.getClientState();

    if (state !== VoxImplant.ClientState.LOGGED_IN) {
      await this.client.login(
        `${id}@${VComm.options.tenant}.${VComm.options.account}.voximplant.com`,
        id
      );

      this.client.registerForPushNotifications(this.pushToken);
    }

    localStorage.setItem("voximplant_user", id);
    localStorage.setItem("voximplant_name", name);
  };

  logout = async () => {
    const state = await this.client.getClientState();

    if (state !== VoxImplant.ClientState.CONNECTED) {
      await this.client.disconnect();
    }

    this.client.unregisterPushNotificationsToken(this.pushToken);

    this.userId = null;
    this.userName = null;

    localStorage.removeItem("voximplant_user");
    localStorage.removeItem("voximplant_name");
  };

  handlePushNotification = (notification) => {
    if (this.inCall) {
      return;
    }

    (async () => {
      this.client.handlePushNotification(notification);
    })();
  };

  setCall = (call) => {
    this.call = call;

    this.call.on(
      VoxImplant.CallEvents.Connected,
      this.voximplant_call_connected
    );
    this.call.on(
      VoxImplant.CallEvents.Disconnected,
      this.voximplant_call_disconnected
    );
    this.call.on(
      VoxImplant.CallEvents.EndpointAdded,
      this.voximplant_call_endpointAdded
    );
    this.call.on(VoxImplant.CallEvents.Failed, this.voximplant_call_failed);
    this.call.on(
      VoxImplant.CallEvents.ICECompleted,
      this.voximplant_call_iceCompleted
    );
    this.call.on(
      VoxImplant.CallEvents.ICETimeout,
      this.voximplant_call_iceTimeout
    );
    this.call.on(
      VoxImplant.CallEvents.InfoReceived,
      this.voximplant_call_infoReceived
    );
    this.call.on(
      VoxImplant.CallEvents.LocalVideoStreamAdded,
      this.voximplant_call_localVideoStreamAdded
    );
    this.call.on(
      VoxImplant.CallEvents.LocalVideoStreamRemoved,
      this.voximplant_call_localVideoStreamRemoved
    );
    this.call.on(
      VoxImplant.CallEvents.MessageReceived,
      this.voximplant_call_messageReceived
    );
    this.call.on(
      VoxImplant.CallEvents.ProgressToneStart,
      this.voximplant_call_progressToneStart
    );
    this.call.on(
      VoxImplant.CallEvents.ProgressToneStop,
      this.voximplant_call_progressToneStop
    );
  };

  unsetCall = () => {
    this.call.off(
      VoxImplant.CallEvents.Connected,
      this.voximplant_call_connected
    );
    this.call.off(
      VoxImplant.CallEvents.Disconnected,
      this.voximplant_call_disconnected
    );
    this.call.off(
      VoxImplant.CallEvents.EndpointAdded,
      this.voximplant_call_endpointAdded
    );
    this.call.off(VoxImplant.CallEvents.Failed, this.voximplant_call_failed);
    this.call.off(
      VoxImplant.CallEvents.ICECompleted,
      this.voximplant_call_iceCompleted
    );
    this.call.off(
      VoxImplant.CallEvents.ICETimeout,
      this.voximplant_call_iceTimeout
    );
    this.call.off(
      VoxImplant.CallEvents.InfoReceived,
      this.voximplant_call_infoReceived
    );
    this.call.off(
      VoxImplant.CallEvents.LocalVideoStreamAdded,
      this.voximplant_call_localVideoStreamAdded
    );
    this.call.off(
      VoxImplant.CallEvents.LocalVideoStreamRemoved,
      this.voximplant_call_localVideoStreamRemoved
    );
    this.call.off(
      VoxImplant.CallEvents.MessageReceived,
      this.voximplant_call_messageReceived
    );
    this.call.off(
      VoxImplant.CallEvents.ProgressToneStart,
      this.voximplant_call_progressToneStart
    );
    this.call.off(
      VoxImplant.CallEvents.ProgressToneStop,
      this.voximplant_call_progressToneStop
    );

    this.call = undefined;

    this.callUUID = null;
    this.inCall = false;

    this.isMuted = false;

    this.localVideoId = null;
    this.remoteVideoId = null;

    this.callStart = null;
    this.caller = null;
    this.callee = null;
  };

  getCallUUID = () => {
    if (!this.callUUID) {
      this.callUUID = uuid.v4();
    }

    return this.callUUID;
  };

  makeCall = async (id, name, hasVideo) => {
    try {
      let _id = "" + id;

      if (_id.length < 8) {
        _id = "00000000" + _id;
        _id = _id.substr(_id.length - 8);
      }

      this.callInfo = {
        id: _id,
        name: name,
        hasVideo: hasVideo,
      };

      this.calling = true;
      this.inCall = false;

      this.emit(VComm.Events.CallStatus, VComm.CallStatus.Calling);

      const callee = `${this.callInfo.id}@${VComm.options.tenant}.${VComm.options.account}.voximplant.com`;

      this.isCaller = true;

      this.callStart = new Date();
      this.caller = this.userId;
      this.callee = this.callInfo.id;

      const call = await this.client.call(callee, {
        receiveVideo: this.callInfo.hasVideo,
        sendVideo: this.callInfo.hasVideo,
      });

      this.setCall(call);
    } catch (error) {
      this.calling = false;
      this.inCall = false;

      this.emit(VComm.Events.CallStatus, VComm.CallStatus.Failed);

      this.callInfo = null;

      // console.error("\n[makeCall]\n" + JSON.stringify(error, null, 4) + "\n");
    }
  };

  acceptCall = async () => {
    await this.call.answer();
  };

  hangupCall = async (status) => {
    if (!this.call) {
      return;
    }

    try {
      this.call.sendVideo(false);
      this.client.showLocalVideo(false);
    } catch {}

    this.call.sendInfo(
      "text/plain",
      this.inCall ? "callEnded" : "callRejected"
    );

    if (this.isCaller) {
      try {
        await API.post(
          API.url + "calls",
          {
            callerId: this.caller,
            calleeId: this.callee,
            startDate: this.callStart,
            finishDate: new Date(),
            status:
              status === VComm.CallStatus.Finished ? "FINISHED" : "CANCELED",
            video: this.callInfo.hasVideo,
          },
          5000
        );
      } catch {}
    }

    try {
      await this.call.hangup();
    } catch (error) {}

    this.unsetCall();

    this.calling = false;
    this.inCall = false;

    this.emit(VComm.Events.CallStatus, status);
  };

  sendVideoRequest = async () => {
    this.call.sendInfo("text/plain", "requestVideo|" + this.userName);
  };

  enableVideo = async (enabled) => {
    if (
      !this.inCall ||
      (enabled && this.localVideoId) ||
      (!enabled && !this.localVideoId)
    ) {
      return;
    }

    if (!this.callInfo.hasVideo) {
      if (enabled) {
        this.sendVideoRequest();
      } else {
        await this.call.sendVideo(true);
      }
    } else {
      await this.call.sendVideo(enabled);
    }
  };

  enableAudio = async (enabled) => {
    if (
      !this.inCall ||
      (enabled && !this.isMuted) ||
      (!enabled && this.isMuted)
    ) {
      return;
    }

    this.isMuted = !enabled;

    if (this.isMuted) {
      await this.call.muteMicrophone();
    } else {
      await this.call.unmuteMicrophone();
    }
  };

  sendData = (data) => {
    this.call.sendInfo("text/plain", "data:" + JSON.stringify(data));
  };

  acceptVideo = async () => {
    this.callInfo.hasVideo = true;
    await this.enableVideo(true);

    if (this.isCaller) {
      await this.call.receiveVideo();
    }

    this.call.sendInfo("text/plain", "videoRequestAccepted");
  };

  rejectVideo = async () => {
    this.call.sendInfo("text/plain", "videoRequestRejected|" + this.userName);
  };

  voximplant_client_sdkReady = async (data) => {
    const state = await this.client.getClientState();

    if (state === VoxImplant.ClientState.DISCONNECTED) {
      await this.client.connect();
    }
  };

  voximplant_client_authResult = async (data) => {
    this.emit(VComm.Events.Logged, true);
  };

  voximplant_client_connectionEstablished = async (data) => {
    this.emit(VComm.Events.Connected, true);
  };

  voximplant_client_connectionFailed = async (data) => {
    this.emit(VComm.Events.Connected, false);
  };

  voximplant_client_connectionClosed = async (data) => {
    this.emit(VComm.Events.Connected, false);
  };

  voximplant_client_incomingCall = async (data) => {
    this.setCall(data.call);
    this.isCaller = false;

    if (!this.callInfo) {
      this.callInfo = {
        hasVideo: data.video,
      };
    } else {
      this.callInfo.hasVideo = data.video;
    }
  };

  voximplant_client_refreshTokenResult = async (data) => {};

  voximplant_call_connected = async (data) => {
    this.call.sendVideo(!!this.media);

    this.client.showLocalVideo(!!this.media);

    if (this.media) {
      this.media.render(document.getElementById("remoteVideoContainer"));
    }

    setTimeout(() => {
      this.calling = false;
      this.inCall = true;

      this.emit(VComm.Events.CallStatus, VComm.CallStatus.InCall);
    }, 500);
  };

  voximplant_call_disconnected = async (data) => {
    this.call.sendVideo(false);
    this.client.showLocalVideo(false);

    this.emit(
      VComm.Events.CallStatus,
      this.inCall ? VComm.CallStatus.Finished : VComm.CallStatus.Cancelled
    );
  };

  voximplant_call_endpointAdded = async (data) => {
    data.endpoint.on(
      VoxImplant.EndpointEvents.InfoUpdated,
      this.voximplant_endpoint_infoUpdated
    );
    data.endpoint.on(
      VoxImplant.EndpointEvents.RemoteMediaAdded,
      this.voximplant_endpoint_remoteVideoStreamAdded
    );
    data.endpoint.on(
      VoxImplant.EndpointEvents.RemoteMediaRemoved,
      this.voximplant_endpoint_remoteVideoStreamRemoved
    );
    data.endpoint.on(
      VoxImplant.EndpointEvents.Removed,
      this.voximplant_endpoint_removed
    );

    if (data.endpoint.userName) {
      this.callInfo = {
        ...this.callInfo,
        id: data.endpoint.userName,
        name: data.endpoint.displayName
          ? data.endpoint.displayName.substr(
              data.endpoint.displayName.indexOf("|") + 1
            )
          : null,
      };
    }

    if (!this.isCaller) {
      this.emit(VComm.Events.CallStatus, VComm.CallStatus.Ringing);
    }
  };

  voximplant_call_failed = async (data) => {
    if (this.isCaller) {
      try {
        await API.post(
          API.url + "calls",
          {
            callerId: this.caller,
            calleeId: this.callee,
            startDate: this.callStart,
            finishDate: new Date(),
            status: data.code === 603 ? "DECLINED" : "TIMEOUT",
            video: this.callInfo.hasVideo,
          },
          5000
        );
      } catch {}
    }

    if (this.call) {
      this.unsetCall();
    }

    this.calling = false;
    this.inCall = false;
    this.emit(
      VComm.Events.CallStatus,
      data.code === 603 ? VComm.CallStatus.Declined : VComm.CallStatus.Failed
    );
  };

  voximplant_call_iceCompleted = async (data) => {};

  voximplant_call_iceTimeout = async (data) => {};

  voximplant_call_infoReceived = async (data) => {
    if (data.body.startsWith("requestVideo")) {
      this.emit(VoxImplant.Events.VideoRequested, true);
    } else if (data.body.startsWith("videoRequestAccepted")) {
      this.callInfo.hasVideo = true;
      await this.enableVideo(true);

      if (this.isCaller) {
        this.call.receiveVideo();
      }
    } else if (data.body.startsWith("videoRequestRejected")) {
      this.emit(VoxImplant.Events.VideoRejected, true);
    } else if (data.body.startsWith("data:")) {
      const _data = JSON.parse(data.body.substr(5));
      // console.log(_data);
      this.emit(VComm.Events.DataReceived, _data);
    }
  };

  voximplant_call_localVideoStreamAdded = async (data) => {
    this.emit(VComm.Events.LocalVideo, true);
  };

  voximplant_call_localVideoStreamRemoved = async (data) => {
    this.emit(VComm.Events.LocalVideo, false);
  };

  voximplant_call_messageReceived = async (data) => {};

  voximplant_call_progressToneStart = async (data) => {};

  voximplant_call_progressToneStop = async (data) => {};

  voximplant_endpoint_infoUpdated = async (data) => {};

  voximplant_endpoint_remoteVideoStreamAdded = async (data) => {
    if (data.mediaRenderer.kind === "video") {
      this.media = data.mediaRenderer;

      if (this.isCaller) {
        this.call.sendVideo(!!this.media);

        this.client.showLocalVideo(!!this.media);

        this.media.render(document.getElementById("remoteVideoContainer"));
      }
    }
  };

  voximplant_endpoint_remoteVideoStreamRemoved = async (data) => {
    if (data.mediaRenderer.kind === "video") {
      this.media = null;
    }
  };

  voximplant_endpoint_removed = async (data) => {
    data.endpoint.off(
      VoxImplant.EndpointEvents.InfoUpdated,
      this.voximplant_endpoint_infoUpdated
    );
    data.endpoint.off(
      VoxImplant.EndpointEvents.RemoteVideoStreamAdded,
      this.voximplant_endpoint_remoteVideoStreamAdded
    );
    data.endpoint.off(
      VoxImplant.EndpointEvents.RemoteVideoStreamRemoved,
      this.voximplant_endpoint_remoteVideoStreamRemoved
    );
    data.endpoint.off(
      VoxImplant.EndpointEvents.Removed,
      this.voximplant_endpoint_removed
    );
  };

  log = (title, data) => {
    if (data) {
      console.log(
        "\n\n[" + title + "]\n" + JSON.stringify(data, null, 4) + "\n"
      );
    } else {
      console.log("\n\n[" + title + "]\n");
    }
  };
}
