import { combineReducers } from 'redux';
import { types } from './Form-types';

const name = (state = '', { type, payload }) => {
  switch (type) {
    case types.GET_NAME:
      return (state = payload);

    case types.RESET:
      return (state = payload);

    default:
      return state;
  }
};

const number = (state = '', { type, payload }) => {
  switch (type) {
    case types.GET_NUMBER:
      return (state = payload);

    case types.RESET:
      return (state = payload);

    default:
      return state;
  }
};

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    default:
      return state;
  }
};

export const formReducer = combineReducers({
  name,
  number,
  contacts,
});
