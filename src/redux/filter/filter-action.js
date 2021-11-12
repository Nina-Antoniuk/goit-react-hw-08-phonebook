export const filteredContacts = value => {
  return {
    type: 'filter/filter',
    payload: value,
  };
};
