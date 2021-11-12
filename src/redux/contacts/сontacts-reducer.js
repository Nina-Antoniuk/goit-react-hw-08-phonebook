import { combineReducers } from 'redux';
import { types } from './сontacts-types';

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

const contact = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  name,
  number,
  contact,
});
