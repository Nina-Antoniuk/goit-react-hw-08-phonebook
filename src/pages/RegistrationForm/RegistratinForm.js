import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { registrationAsyncThunk } from 'redux/auth/auth-asyncThunk';
import s from './RegistrationForm.module.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const changeHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        alert(`Check input ${e.target.name} please`);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(registrationAsyncThunk({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <div className={s.formWrapper}>
        <h2 className={s.formTitle}>Registration form</h2>
        <form className={s.form} onSubmit={submitHandler}>
          <label className="label" htmlFor="nameId">
            Name
          </label>
          <input
            id="nameId"
            type="text"
            placeholder="name"
            value={name}
            onChange={changeHandler}
            name="name"
            className="input"
          />
          <label className="label" htmlFor="emailId">
            Email
          </label>
          <input
            id="emailId"
            type="email"
            placeholder="email"
            value={email}
            onChange={changeHandler}
            name="email"
            className="input"
          />
          <label className="label" htmlFor="passwordId">
            Password
          </label>
          <input
            id="passwordId"
            type="password"
            placeholder="password"
            value={password}
            onChange={changeHandler}
            name="password"
            className="input"
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}
export default RegistrationForm;
