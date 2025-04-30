import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "@/redux/auth/authSlice";
// import productReducer from "@/redux/product/productSlice";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

// Create a custom storage object that checks for window
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    }
  };
};

const storage = typeof window !== 'undefined' 
  ? require('redux-persist/lib/storage').default 
  : createNoopStorage();

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