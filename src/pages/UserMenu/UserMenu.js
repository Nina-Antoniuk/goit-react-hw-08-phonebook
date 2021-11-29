import { useDispatch } from 'react-redux';
import { logoutAsyncThunk } from 'redux/auth/auth-asyncThunk';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(logoutAsyncThunk());
  };

  return (
    <div className={s.UserMenu}>
      <a className={s.mailLink} href="/">
        Mail
      </a>
      <button className={s.logoutBtn} type="submit" onClick={clickHandler}>
        Logout
      </button>
    </div>
  );
}
export default UserMenu;
