import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist'
import {persistedContactsReducer} from "./contactsSlice";
import {filterSliceReducer} from "./filterSlice";


import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
