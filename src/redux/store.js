import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "@/redux/auth/authSlice";
// import productReducer from "@/redux/product/productSlice";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: 'aria',
  storage,
  whitelist: ["auth","userPreference","cart"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    });
  },
});
const persistor = persistStore(store);
export { store, persistor }