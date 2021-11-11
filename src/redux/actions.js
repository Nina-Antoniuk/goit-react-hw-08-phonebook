// export const getName = name => {
//   return {
//     type: 'form/getName',
//     payload: name,
//   };
// };

// export const getNumber = num => {
//   return {
//     type: 'form/getNumber',
//     payload: num,
//   };
// };

// export const resetInputValue = () => {
//   return {
//     type: 'form/resetInputValue',
//     payload: '',
//   };
// };

export const addContact = contact => {
  return {
    type: 'form/add',
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/delete',
    payload: id,
  };
};

export const getSearchValue = searchValue => {
  return {
    type: 'searchValue/get',
    payload: searchValue,
  };
};
