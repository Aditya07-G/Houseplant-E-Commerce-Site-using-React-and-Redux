// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import rootReducer from './reducers'; // this uses your new index.js in /reducers

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [], // you can add reducers here that you don't want persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // silences that "non-serializable value" warning
    }),
});

const persistor = persistStore(store);

export { store, persistor };
