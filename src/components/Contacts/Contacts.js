import { useDispatch, useSelector } from 'react-redux';
import s from './Contacts.module.css';
import { getVisibleContatcs } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operation';
import ContactsListElement from '../ContactsListElement';

function Contacts() {
  const allContacts = useSelector(getVisibleContatcs);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {allContacts.map(el => {
        return (
          <ContactsListElement
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.phone}
            onClick={e => dispatch(deleteContact(e.target.parentNode.id))}
          />
        );
      })}
    </ul>
  );
}

export default Contacts;
