import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchContacts} from "services/contacts-api";


export const getContacts =createAsyncThunk(
'contacts/getContacts',
async () => {
  const data = await fetchContacts();
  console.log(data);
  return data;
}
)
