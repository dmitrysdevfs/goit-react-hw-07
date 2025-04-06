import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOps';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },

  // reducers: {
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },

  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;
