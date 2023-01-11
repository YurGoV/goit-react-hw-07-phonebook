import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {nanoid} from "nanoid";
import {addContact} from "../../redux/contactsSlice";
import {Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import {buttonStyle, formStyles} from "./ContactForm.styled";


export const ContactForm = () => {
  const {contacts} = useSelector(state => state.contacts);
  const {register, resetField, handleSubmit} = useForm();//todo: validation
  const dispatch = useDispatch();


  const onFormSubmit = ({name = '', number = ''}) => {
    name = name.trim();
    number = number.trim();
    if (!name || !number) {
      return toast('Please input name & number of Contact');
    }

    const isAlreadyInContacts = contacts.find(contact => contact.name === name);
    if (isAlreadyInContacts) {
      return toast(`${name} is already in contacts`);
    }

    const id = nanoid();//adding new contact
    dispatch(addContact({
      id,
      name,
      number,
    }))

    resetField('name');
    resetField('number');
  };

  return (

    <Box component='form' noValidate autoComplete="on" onSubmit={handleSubmit(onFormSubmit)} sx={formStyles}
    >
      <TextField {...register("name")} label="Name" variant="standard" size="small"/>
      <TextField {...register("number")} label="Number" variant="standard" size="small"/>

      <Button type="submit" variant="outlined" size="small" sx={buttonStyle}>
        Add
      </Button>

    </Box>
  );
};




