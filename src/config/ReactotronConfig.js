import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
// import reactotronSaga from "reactotron-redux-saga";

// if (process.env.NODE_ENV === "development") {
//   const tron = Reactotron.configure()
//     .use(reactotronRedux())
//     .use(reactotronSaga())
//     .connect();
//   tron.clear();
//   console.tron = tron;
// }

if (process.env.NODE_ENV === "development") {
  // const tron = Reactotron.configure({host: '192.168.0.13'})
  const tron = Reactotron.configure({host: '10.0.0.186'})
  // const tron = Reactotron.configure()
  .use(reactotronRedux())
  // .setAsyncStorageHandler(AsyncStorage)
  // .use(sagaPlugin())
  .useReactNative({
  errors: false,
  })
  .connect();
  
  tron.clear();
  
  console.tron = tron;
  } else {
  console.tron = {};
  console.tron.log = (message) => {};
  }
