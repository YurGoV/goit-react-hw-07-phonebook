import axios from 'axios';

export async function getContacts() {
  const response = await axios.get(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts`);
  console.log(response.data);
  return response.data;
}

export async function postContact(data) {
  const response = await axios.post(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts`, data);
  console.log(response.data);
  return response.data;
}

export async function delContact(id) {
  const response = await axios.delete(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts/${id}`);
  console.log(response.data.id);
  return response.data.id;
}

/*
export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}*/
