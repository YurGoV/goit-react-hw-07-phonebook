import {createSlice} from '@reduxjs/toolkit';
import {getContacts} from "./contactsOperations";


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
 extraReducers: {
   // [getContacts.pending](state, action) {},
   [getContacts.pending](state) {
     state.isLoading = true;
   },
   [getContacts.fulfilled](state, action) {
     console.log('lllllll', action.payload);
     state.isLoading = false;
     state.error = null;
     state.contacts = action.payload;
   },
   [getContacts.rejected](state, action) {},
 }
});

// export const {addContact, delContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


/*
reducers: {
  addContact(state, action) {
    return {contacts: [...state.contacts, action.payload]}
  },
  delContact(state, action) {
    return {contacts: state.contacts.filter(item => item.id !== action.payload)}
  },
}
*/
