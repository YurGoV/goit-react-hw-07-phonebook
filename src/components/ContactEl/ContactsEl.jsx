import React from "react";
import {useDispatch} from "react-redux";
import {delContact} from "../../redux/contactsSlice";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {Button, Stack, Typography} from "@mui/material";
import {
  contactsListStyles,
  deleteButtonStyles,
  Item
} from "./ContactsEl.styled";


export const ContactsEl = ({data}) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(delContact(id));
  }

  return (
    <Box sx={contactsListStyles}>
      <Stack spacing={2} sx={{width: '100%'}}>
        {data.map(contact => (
            <Item key={contact.id}>
              <Typography>{contact.name}: {contact.number}</Typography>
              <Button onClick={() => onDelete(contact.id)} sx={deleteButtonStyles}>delete</Button>
            </Item>
          )
        )}
      </Stack>
    </Box>
  );
};

ContactsEl.propTypes = {
  data: PropTypes.array,
}



