import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import './App.css';
// import * as actions from './redux/actions';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContacts] = useState([]); //
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      const listOfContacts = JSON.parse(localStorage.getItem('contacts'));
      setContacts(listOfContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const inputChange = e => {
    setSearchValue(e.target.value);
  };

  const submit = obj => {
    const existingContact = contacts.find(contact => {
      return contact.name === obj.name;
    });

    if (existingContact) {
      return alert(`${obj.name} is already in contacts`);
    }

    setContacts([
      {
        id: uuidv1(),
        ...obj,
      },
      ...contacts,
    ]);
  };

  const contactsFiltering = () => {
    const filterValue = searchValue.toLocaleLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue);
    });
  };

  const deleteContact = e => {
    return setContacts(() => {
      return contacts.filter(contact => {
        return contact.id !== e.target.parentNode.id;
      });
    });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h2>Phonebook</h2>
        <Form onSubmit={submit} />
      </div>
      <div className="wrapper">
        <h2>Contacts</h2>
        <Filter id={uuidv1()} value={searchValue} onChange={inputChange} />
        <Contacts names={contactsFiltering} onClick={deleteContact} />
      </div>
    </div>
  );
}

export default App;
