import axios from 'axios';

export async function fetchContacts() {
  const response = await axios.get(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts`);
  console.log(response.data);
  return response.data;
}

export async function addContact(data) {
  const response = await axios.post(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts`, data);
  console.log(response);
}

export async function deleteContact(id) {
  const response = await axios.delete(`https://63bec5a9e348cb0762180cfe.mockapi.io/contacts/${id}`);
  console.log(response);
}

/*
export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}?_expand=author`);
  return data;
}*/
