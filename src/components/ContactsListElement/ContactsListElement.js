import PropTypes from 'prop-types';
import s from './ContactsListElement.module.css';

function ContactsListElement({ id, name, number, onClick }) {
  return (
    <li className={s.listItem} id={id}>
      <span className={s.name}>{name}:</span> {number}
      <button className={s.deleteBtn} type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

ContactsListElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactsListElement;
