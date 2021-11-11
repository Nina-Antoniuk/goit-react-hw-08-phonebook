const initValue = {
  name: '',
  number: '',
  contacts: [],
  searchValue: '',
};

function reducer(state = initValue, { type, payload }) {
  switch (type) {
    case 'form/getName':
      return { ...state, name: payload };
    case 'form/getNumber':
      return { ...state, number: payload };
    case 'form/resetInputValue':
      return { ...state, name: '', number: '' };
    case 'form/add':
      state.contacts.push(payload);
      return { ...state };
    // return { ...state, contacts: state.contacts.push(payload) } // contacts: 1
    case 'contacts/delete':
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    case 'searchValue/get':
      return { ...state, searchValue: payload };
    default:
      return state;
  }
}

export default reducer;
