import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Form.module.css';
import { addContact } from 'redux/contacts/contacts-operation';
import { getContacts } from 'redux/contacts/contacts-selectors';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const inputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        console.log('oops');
    }
  };

  const submit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const condition = contacts.find(
      el => el.name.toLowerCase() === normalizedName,
    );
    if (condition) {
      alert(`Contact ${name} is already exist!`);
      reset();
      return;
    }
    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
        value={name}
        onChange={inputChange}
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
        value={phone}
        onChange={inputChange}
      />
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
