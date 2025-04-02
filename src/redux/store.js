import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import filtersReducer from './filtersSlice';
import contactsReducer from './contactsSlice';

const persistedContactsReducer = persistReducer(
  {
    key: 'visible_contacts',
    storage,
    whitelist: ['items'],
  },
  contactsReducer
);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
