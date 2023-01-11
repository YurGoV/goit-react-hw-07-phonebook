import React from "react";
import {useSelector} from "react-redux";
import {ContactsEl} from "../ContactEl/ContactsEl";
import {contactsStyles, titleStyles} from "./ContactsList.styled";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";


export const ContactsList = () => {

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



