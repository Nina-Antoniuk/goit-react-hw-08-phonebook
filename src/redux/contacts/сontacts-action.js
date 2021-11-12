export const getName = name => {
  return {
    type: 'contacts/getName',
    payload: name,
  };
};

export const getNumber = num => {
  return {
    type: 'contacts/getNumber',
    payload: num,
  };
};

export const resetInputValue = () => {
  return {
    type: 'contacts/resetInputValue',
    payload: '',
  };
};

export const addContact = contact => {
  return {
    type: 'contacts/add',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/delete',
    payload: id,
  };
};
