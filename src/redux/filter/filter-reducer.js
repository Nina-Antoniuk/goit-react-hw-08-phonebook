import { FILTER } from './filter-types';

export const filterContactsReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return (state = payload);

    default:
      return state;
  }
};
