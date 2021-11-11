import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import PropTypes from 'prop-types';
import s from './Form.module.css';
import * as actions from '../../redux/form/Form-action';

function Form({ newName, newNumber, getName, getNumber, reset, addContact }) {
  const submit = e => {
    e.preventDefault();
    addContact({
      name: newName,
      number: newNumber,
      id: uuidv1(),
    });
    reset();
  };

  return (
    <form className={s.form} onSubmit={submit}>
      <label className="label" htmlFor="nameId">
        Name
      </label>
      <input
        id="nameId"
        className="input"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов.
          Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        value={newName}
        onChange={e => getName(e.target.value)}
      />
      <label className="label" htmlFor="numberId">
        Number
      </label>
      <input
        id="numberId"
        className="input"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, 
          круглые скобки и может начинаться с +"
        required
        autoComplete="off"
        value={newNumber}
        onChange={e => getNumber(e.target.value)}
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getName: name => dispatch(actions.getName(name)),
    getNumber: num => dispatch(actions.getNumber(num)),
    reset: () => dispatch(actions.resetInputValue()),
    addContact: contact => dispatch(actions.addContact(contact)),
  };
};

const matStateToProps = state => {
  return {
    newName: state.form.name,
    newNumber: state.form.number,
  };
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(matStateToProps, mapDispatchToProps)(Form);
