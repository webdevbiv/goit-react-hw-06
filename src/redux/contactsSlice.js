import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setContacts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact, setContacts, filterContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
