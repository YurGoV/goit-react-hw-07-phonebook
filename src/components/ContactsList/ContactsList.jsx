import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ContactsEl} from "../ContactEl/ContactsEl";
import {contactsStyles, titleStyles} from "./ContactsList.styled";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
// import {addContact, deleteContact, fetchContacts} from "services/contacts-api";
// import {getCLS} from "web-vitals";
import {getContacts} from "redux/contactsOperations";



export const ContactsList = () => {

  const dispatch = useDispatch();


  // fetchContacts();

  /*const contact = {createdAt: "2023-01-11T02:33:46.051Z",
    id: "1",
    name: "Miss Alexis Ryan",
    phone: "959-789-3287"
}*/
  // addContact(contact);
  // deleteContact(11);
  // getContacts();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const {contacts} = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  function filteredData() {
    if (filter.length > 0) {
      return contacts.filter(el => el.name
        .toLowerCase()
        .includes(filter.toLowerCase()
          .trim()));
    }
    return contacts;
    // return [];
  }

  if (filteredData().length > 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>Contacts</Typography>

        <ContactsEl data={filteredData()}></ContactsEl>
      </Box>
    );
  }

  if (filteredData().length === 0 && !filter) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>
          The Phonebook is Empty</Typography>
      </Box>
    );
  }

  return (
    <Box sx={contactsStyles}>
      <Typography component='h2' sx={titleStyles}>
        There are no contacts, matching you query (</Typography>
    </Box>
  );
};



