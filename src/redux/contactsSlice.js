import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts, deleteContact, addContact} from "./contactsOperations";


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
 extraReducers: {
   [fetchContacts.pending](state) {
     state.isLoading = true;
   },
   [fetchContacts.fulfilled](state, action) {
     console.log('ffffffff', action.payload);
     state.isLoading = false;
     state.error = null;
     state.contacts = action.payload;
   },
   [fetchContacts.rejected](state, action) {
     state.isLoading = false;
     state.error = action.payload;
   },

   [deleteContact.pending](state) {
     state.isLoading = true;
   },
   [deleteContact.fulfilled](state, action) {
     console.log('dddddddd', action.payload);
     state.isLoading = false;
     state.error = null;
     state.contacts = state.contacts.filter(item => item.id !== action.payload);
   },
   [deleteContact.rejected](state, action) {
     state.isLoading = false;
     state.error = action.payload;
   },

   [addContact.pending](state) {
     state.isLoading = true;
   },
   [addContact.fulfilled](state, action) {
     console.log('aaaaaaaaa', action.payload);
     state.isLoading = false;
     state.error = null;
     state.contacts = [...state.contacts, action.payload];
   },
   [addContact.rejected](state, action) {
     state.isLoading = false;
     state.error = action.payload;
   },



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
