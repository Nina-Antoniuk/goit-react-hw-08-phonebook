import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import s from './Contacts.module.css';
import { getVisibleContatcs } from 'redux/contacts/contacts-selectors';
import { deleteContactThunk } from 'redux/contacts/contacts-asyncThunk';
import ContactsListElement from '../ContactsListElement';

function ContactsList() {
  const allContacts = useSelector(getVisibleContatcs); //allContacts.length > 0 ? [] : allContacts
  const dispatch = useDispatch();

  return (
    <Container className={s.contactsListContainer}>
      <Row>
        <ul className={s.list}>
          {allContacts.map(el => {
            return (
              <ContactsListElement
                key={el.id}
                id={el.id}
                name={el.name}
                number={el.number}
                onClick={e =>
                  dispatch(deleteContactThunk(e.target.parentNode.id))
                }
              />
            );
          })}
        </ul>
      </Row>
    </Container>
  );
}

export default ContactsList;
