import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorizationAsyncThunk } from 'redux/auth/auth-asyncThunk';
import s from './AuthorizationForm.module.css';

function AuthorizationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const changeHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        alert('please check the name of the field');
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(authorizationAsyncThunk({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.formWrapper}>
      <h2>Authorization form</h2>
      <form className={s.form} onSubmit={submitHandler}>
        <label className="label" htmlFor="emailId">
          Email
        </label>
        <input
          id="emailId"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={changeHandler}
          className="input"
        />
        <label className="label" htmlFor="passwordId">
          Password
        </label>
        <input
          id="passwordId"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={changeHandler}
          className="input"
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default AuthorizationForm;
