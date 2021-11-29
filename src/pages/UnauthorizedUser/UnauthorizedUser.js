import { Link } from 'react-router-dom';
import s from './UnauthorizedUser.module.css';

function UnauthorizedUser() {
  return (
    <div className={s.UnauthorizedUser}>
      <ul className={s.Nav}>
        <li className={s.NavItem}>
          <Link className={s.NavLink} to="/">
            Home
          </Link>
        </li>
        <li className={s.NavItem}>
          <Link className={s.NavLink} to="/registration">
            Registration
          </Link>
        </li>
        <li className={s.NavItem}>
          <Link className={s.NavLink} to="/authorization">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default UnauthorizedUser;
