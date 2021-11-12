import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { filteredContacts } from '../../redux/contacts/сontacts-action';

function Filter({ value, onChange }) {
  const inputID = uuidv1();
  return (
    <>
      <label className="label" htmlFor={inputID}>
        Find contacts by name
      </label>

      <input
        id={inputID}
        className="input"
        name="filter"
        type="text"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Введите имя которое ищите"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(filteredContacts(e.target.value)),
  };
};

const matStateToProps = state => {
  return {
    value: state.filter,
  };
};

export default connect(matStateToProps, mapDispatchToProps)(Filter);
