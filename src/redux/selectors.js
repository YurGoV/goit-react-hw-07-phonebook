import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectLoader = state => state.contacts.isLoading;
export const selectFilter = state => state.filter;


export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
  (contacts, filter) => {
    console.log(filter);
    console.log('start filtering');

    if (filter.length > 0) {
      return contacts.filter(el => el.name
        .toLowerCase()
        .includes(filter.toLowerCase()
          .trim()));
    }
    return contacts;
    // return [];
  }
)

/*
export const selectFilteredContacts = state => {

  const contacts = selectContacts(state);
  console.log(contacts);
  const filter = selectFilter(state);
      console.log(filter);
        console.log('start filtering');

    if (filter.length > 0) {
      return contacts.filter(el => el.name
        .toLowerCase()
        .includes(filter.toLowerCase()
          .trim()));
    }
    return contacts;
    // return [];
};
*/
