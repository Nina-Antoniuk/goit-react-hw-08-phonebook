// import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

function App() {
  // useEffect(() => {
  //   if (localStorage.getItem('contacts')) {
  //     const listOfContacts = JSON.parse(localStorage.getItem('contacts'));
  //     setContacts(listOfContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const submit = obj => {
  //   const existingContact = contacts.find(contact => {
  //     return contact.name === obj.name;
  //   });

  //   if (existingContact) {
  //     return alert(`${obj.name} is already in contacts`);
  //   }

  //   setContacts([
  //     {
  //       id: uuidv1(),
  //       ...obj,
  //     },
  //     ...contacts,
  //   ]);
  // };

  // const contactsFiltering = () => {
  //   const filterValue = searchValue.toLocaleLowerCase();
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filterValue);
  //   });
  // };

  // const deleteContact = e => {
  //   return setContacts(() => {
  //     return contacts.filter(contact => {
  //       return contact.id !== e.target.parentNode.id;
  //     });
  //   });
  // };

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
