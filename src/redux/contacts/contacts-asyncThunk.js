import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const getContactsThunk = createAsyncThunk(
  '/getContact',
  async (contact, { rejectWithValue, getState }) => {
    const state = getState();
    let token = state.auth.token;
    try {
      const response = await fetch(`${BASE_URL}/contacts`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue({ error: error.massege });
    }
  },
);

export const addContactThunk = createAsyncThunk(
  '/addContacts',
  async (contact, { rejectWithValue, getState }) => {
    const state = getState();
    let token = state.auth.token;
    try {
      const response = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue({ error: error.massege });
    }
  },
);

export const deleteContactThunk = createAsyncThunk(
  '/deleteContact',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    let token = state.auth.token;
    try {
      const response = await fetch(`${BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        path: id,
      });
      const data = await response.json(); // data : {}
      return id;
    } catch (error) {
      rejectWithValue({ error: error.massege });
    }
  },
);
