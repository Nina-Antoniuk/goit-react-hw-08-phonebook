import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { deleteContact } from '../../redux/contacts/сontacts-action';
import ContactsListElement from '../ContactsListElement';

function Contacts({ allContacts, deleteContact }) {
  return (
    <ul className={s.list}>
      {allContacts.map(el => {
        return (
          <ContactsListElement
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
            onClick={e => deleteContact(e.target.parentNode.id)}
          />
        );
      })}
    </ul>
  );
}
const getVisibleContatcs = (contacts, searchValue = '') => {
  const normalizedFilter = searchValue.toLocaleLowerCase();
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};

const mapStateToProp = ({ contacts: { contact }, filteredContacts }) => {
  return {
    allContacts: getVisibleContatcs(contact, filteredContacts),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Contacts);
