import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "bellaweb",
      storage,
      whitelist: ["auth", "list"],
    },
    reducers
  );

  return persistedReducer;
};
