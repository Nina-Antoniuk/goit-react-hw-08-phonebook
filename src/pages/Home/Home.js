import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { isAuthState } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import s from './Home.module.css';

function RegistrationForm() {
  const isAuth = useSelector(isAuthState);

  return (
    <Container className={s.homeWrapper}>
      <div className={s.Home}>
        {isAuth ? (
          <Navigate to="/contacts" />
        ) : (
          <p>
            Hello! Welcome to the phonebook app. It's a simple and convenient
            way to keep your contacts close at hand at all times.
          </p>
        )}
      </div>
    </Container>
  );
}
export default RegistrationForm;
