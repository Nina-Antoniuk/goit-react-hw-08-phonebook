// getName, getNumber, resetInputValue, add

export const getName = name => {
  return {
    type: 'form/getName',
    payload: name,
  };
};

export const getNumber = num => {
  return {
    type: 'form/getNumber',
    payload: num,
  };
};

export const resetInputValue = () => {
  return {
    type: 'form/resetInputValue',
    payload: '',
  };
};

export const addContact = contact => {
  return {
    type: 'form/add',
    payload: contact,
  };
};
