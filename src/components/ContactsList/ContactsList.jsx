import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ContactsEl} from "../ContactEl/ContactsEl";
import {contactsStyles, titleStyles} from "./ContactsList.styled";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {toast} from "react-toastify";
// import {addContact, deleteContact, fetchContacts} from "services/contacts-api";
// import {getCLS} from "web-vitals";
import {fetchContacts} from "redux/contactsOperations";
import {selectFilteredContacts, selectError, selectLoader} from "redux/selectors";


export const ContactsList = () => {

  const dispatch = useDispatch();
  // const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoader);
  console.log(error);


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
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      console.log(error);
      toast('Sorry! Something is wrong ((');
    }
  }, [error])


  // const contacts = useSelector(selectContacts);


  // function filteredData() {
  //   if (filter.length > 0) {
  //     return contacts.filter(el => el.name
  //       .toLowerCase()
  //       .includes(filter.toLowerCase()
  //         .trim()));
  //   }
  //   return contacts;
  //   // return [];
  // }


  // todo: refactor logic
  if (isLoading && filteredContacts.length === 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>
          Loading ....</Typography>
      </Box>
    );
  } else if (!isLoading && filteredContacts.length === 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>
          There are no contacts</Typography>
      </Box>
    );
  }

  if (filteredContacts.length > 0) {
    return (
      <Box sx={contactsStyles}>
        <Typography component='h2' sx={titleStyles}>Contacts</Typography>

        <ContactsEl data={filteredContacts}></ContactsEl>
      </Box>
    );
  }


};



