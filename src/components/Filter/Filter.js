import { useDispatch, useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import s from './Filter.module.css';
import { getSearchValue } from 'redux/contacts/contacts-selectors';
import { filterValue } from 'redux/contacts/contacts-slices';

function Filter() {
  const value = useSelector(getSearchValue);
  const dispatch = useDispatch();
  const inputID = uuidv1();
  const onChange = e => {
    dispatch(filterValue(e.target.value));
  };

  return (
    <div className={s.filterWrapper}>
      <label className="label" htmlFor={inputID}>
        Find contacts by name
      </label>

      <input
        id={inputID}
        className={s.input}
        name="filter"
        type="text"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Введите имя которое ищите"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Filter;
