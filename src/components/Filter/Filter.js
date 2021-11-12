import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
// import PropTypes from 'prop-types';
import { filteredContacts } from '../../redux/filter/filter-action';

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
        onChange={e => onChange(e.target.value)}
      />
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: name => dispatch(filteredContacts(name)),
  };
};

const matStateToProps = state => {
  return {
    value: state.filterContactsReducer,
  };
};

export default connect(matStateToProps, mapDispatchToProps)(Filter);
