import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const registrationAsyncThunk = createAsyncThunk(
  '/registration',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users/signup `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const authorizationAsyncThunk = createAsyncThunk(
  '/registration',
  async (user, { rejectWithValue, getState }) => {
    const state = getState();
    let token = state.auth.token;
    try {
      const response = await fetch(`${BASE_URL}/users/login `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const getCurrentUserAsyncThunk = createAsyncThunk(
  '/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    let token = state.auth.token;
    if (!token) {
      throw new Error('here is message from get curent user whithout token');
    }
    try {
      const response = await fetch(`${BASE_URL}/users/current `, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);

export const logoutAsyncThunk = createAsyncThunk(
  '/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    let token = state.auth.token;
    try {
      const response = await fetch(`${BASE_URL}/users/logout `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  },
);
