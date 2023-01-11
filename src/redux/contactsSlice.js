import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage

const persistConfig = {
  key: 'contacts',
  storage,
}


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    addContact(state, action) {
      return {contacts: [...state.contacts, action.payload]}
    },
    delContact(state, action) {
      return {contacts: state.contacts.filter(item => item.id !== action.payload)}
    },
  }
});

export const {addContact, delContact} = contactsSlice.actions;
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

