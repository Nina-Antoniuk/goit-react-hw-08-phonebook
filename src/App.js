import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getContacts } from './redux/contacts/contacts-operation';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  });

  return (
    <div className="App">
      <div className="wrapper">
        <h2>Phonebook</h2>
        <Form />
      </div>
      <div className="wrapper">
        <h2>Contacts</h2>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
