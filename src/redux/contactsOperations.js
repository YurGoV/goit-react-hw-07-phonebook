import {createAsyncThunk} from '@reduxjs/toolkit';
import {getContacts, delContact} from "services/contacts-api";


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const data = await getContacts();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      console.log('idddd: ', id);
      const response = await delContact(id);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }

  }
);
