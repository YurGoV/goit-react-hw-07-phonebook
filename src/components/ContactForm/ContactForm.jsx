import React from "react";
import {useSelector, useDispatch } from "react-redux";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
// import {nanoid} from "nanoid";
import {addContact} from "redux/contactsOperations";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {buttonStyle, formStyles} from "./ContactForm.styled";


export const ContactForm = () => {
  const {contacts} = useSelector(state => state.contacts);
  const {register, resetField, handleSubmit} = useForm();//todo: validation
  const dispatch = useDispatch();


  const onFormSubmit = ({name = '', phone = ''}) => {
    name = name.trim();
    phone = phone.trim();
    if (!name || !phone) {
      return toast('Please input name & phone number of Contact');
    }

    const isAlreadyInContacts = contacts.find(contact => contact.name === name);
    if (isAlreadyInContacts) {
      return toast(`${name} is already in contacts`);
    }

    // const id = nanoid();//adding new contact
    const contactData = {
      name,
      phone,
    }
    console.log(contactData);
    dispatch(addContact(contactData))

    resetField('name');
    resetField('phone');
  };

  return (

    <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onFormSubmit)} sx={formStyles}
    >
      <TextField {...register("name")} label="Name" variant="standard" size="small"/>
      <TextField {...register("phone")} label="Number" variant="standard" size="small"/>

      <Button type="submit" variant="outlined" size="small" sx={buttonStyle}>
        Add
      </Button>

    </Box>
  );
};




