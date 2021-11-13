import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { filteredContacts } from '../../redux/contacts/сontacts-action';
import { getSearchValue } from '../../redux/contacts/contacts-selectors';

function Filter() {
  const value = useSelector(getSearchValue);
  const dispatch = useDispatch();
  const inputID = uuidv1();

  const onChange = e => {
    dispatch(filteredContacts(e.target.value));
  };

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

export default Filter;
