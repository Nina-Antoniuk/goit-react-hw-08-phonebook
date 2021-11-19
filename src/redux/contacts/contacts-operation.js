import {
  getContactsRequest,
  getContactsSuccsess,
  getContactsError,
  addContactsRequest,
  addContactsSuccsess,
  addContactsError,
} from './сontacts-action';

export const getContacts = state => dispatch => {
  dispatch(getContactsRequest());
  fetch('https://61976b3aaf46280017e7e5ea.mockapi.io/phonebook/contacts')
    .then(res => res.json())
    .then(data => {
      dispatch(getContactsSuccsess(data));
    })
    .catch(err => {
      dispatch(getContactsError(err));
    });
};

export const addContact = state => dispatch => {
  // const condition = state.find(el => el.name === action.payload.name);
  // if (condition) {
  // alert('Contact is already exist!');
  // return state;
  // }
  dispatch(addContactsRequest());

  fetch('https://61976b3aaf46280017e7e5ea.mockapi.io/phonebook/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(state),
  })
    .then(res => res.json())
    .then(data => dispatch(addContactsSuccsess(data)))
    .catch(err => dispatch(addContactsError(err)));

  // axios
  //   .post('/contacts', contact)
  //   .then(data =>
  //     dispatch(addContactsSuccsess(data)),
  //   )
  //   .catch(err => dispatch(addContactsError(err)));
};
