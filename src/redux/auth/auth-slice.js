import { createSlice } from '@reduxjs/toolkit';
import {
  registrationAsyncThunk,
  authorizationAsyncThunk,
  getCurrentUserAsyncThunk,
  logoutAsyncThunk,
} from './auth-asyncThunk';

const authSlice = createSlice({
  name: 'customerAuth',
  initialState: {
    user: { name: '', email: '', password: '' },
    token: '',
    isAuth: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //send data
    [registrationAsyncThunk.pending](state, action) {
      return { ...state, isLoading: true };
    },
    [registrationAsyncThunk.fulfilled](state, action) {
      return { ...state, isLoading: false };
    },
    [registrationAsyncThunk.rejected](state, action) {
      console.log('error');
      return { ...state, isLoading: false, error: action.error.message };
    },

    // auth data

    [authorizationAsyncThunk.pending](state, action) {
      return { ...state, isLoading: true };
    },
    [authorizationAsyncThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        isAuth: true,
      };
    },
    [authorizationAsyncThunk.rejected](state, action) {
      console.log('error from authorizationAsyncThunk', action.error.message);
      return { ...state, isLoading: false, error: action.error.message };
    },

    //get curent user data
    [getCurrentUserAsyncThunk.pending](state, action) {
      return { ...state, isLoading: true };
    },
    [getCurrentUserAsyncThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        // token: action.payload.token,
      };
    },
    [getCurrentUserAsyncThunk.rejected](state, action) {
      console.log('error from getCurrentUserAsyncThunk', action.error.message);
      return { ...state, isLoading: false, error: action.error.message };
    },

    //logout
    [logoutAsyncThunk.pending](state) {
      return { ...state, isLoading: true };
    },
    [logoutAsyncThunk.fulfilled](state) {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: '',
      };
    },
    [logoutAsyncThunk.rejected](state, action) {
      console.log('error from logoutAsyncThunk', action.error.message);
      return { ...state, isLoading: false, error: action.error.message };
    },
  },
});

export default authSlice.reducer;
