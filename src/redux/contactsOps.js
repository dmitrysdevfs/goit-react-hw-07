import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://67f25221ec56ec1a36d2c1f3.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const res = await axios.get('/contacts');
    return res.data;
  } catch (error) {}
});
