import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import s from './Contacts.module.css';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import { getContactsThunk } from 'redux/contacts/contacts-asyncThunk';

function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  });
  return (
    <Container className={s.SectionWrapper}>
      <Row className={s.contactsContainer}>
        <Col md={6}>
          <p>Add new contact</p>
          <Form />
        </Col>
        <Col md={6}>
          <Filter />
          <ContactsList />
        </Col>
      </Row>
    </Container>
  );
}
export default Contacts;
