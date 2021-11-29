import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contacts-asyncThunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
    filter: '',
    isLoading: false,
  },
  reducers: {
    filterValue: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    //get contacts
    [getContactsThunk.pending](state) {
      return { ...state, isLoading: true };
    },
    [getContactsThunk.fulfilled](state, action) {
      // return [...action.payload];
      if (action.payload.message === 'Please authenticate') return state;
      return { ...state, isLoading: false, contactsList: [...action.payload] };
    },
    [getContactsThunk.rejected](state, action) {
      console.log(action.error.message);
      return { ...state, isLoading: false };
    },

    //add contact
    [addContactThunk.pending](state) {
      return { ...state, isLoading: true };
    },
    [addContactThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contactsList: [...state.contactsList, { ...action.payload }],
      };
    },
    [addContactThunk.rejected](state, action) {
      console.log(action.error.massege);
      return { ...state, isLoading: false };
    },

    // delete contact
    [deleteContactThunk.pending](state) {
      return { ...state, isLoading: true };
    },
    [deleteContactThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contactsList: state.contactsList.filter(
          ({ id }) => id !== action.payload,
        ),
      };
    },
    [deleteContactThunk.rejected](state, action) {
      console.log(action.error.message);
      return { ...state, isLoading: false };
    },
  },
});

export const { filterValue } = contactsSlice.actions;
export default contactsSlice.reducer;
