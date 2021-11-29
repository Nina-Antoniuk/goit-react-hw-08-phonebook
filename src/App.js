import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { getCurrentUserAsyncThunk } from 'redux/auth/auth-asyncThunk';
import { isAuthState } from 'redux/auth/auth-selectors';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import UnauthorizedUser from 'pages/UnauthorizedUser';
import UserMenu from 'pages/UserMenu';
import Home from 'pages/Home';
import RegistrationForm from 'pages/RegistrationForm';
import AuthorizationForm from 'pages/AuthorizationForm';
import Contacts from 'pages/Contacts';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthState);

  useEffect(() => {
    dispatch(getCurrentUserAsyncThunk());
  });

  return (
    <div className="App">
      <header className="header">
        <nav>
          <Container fluid>
            <Row>
              <Col className="menuContainer">
                {isAuth ? <UserMenu /> : <UnauthorizedUser />}
              </Col>
            </Row>
          </Container>
        </nav>
      </header>
      <main>
        <Container fluid className="mainContainer">
          <Row className="test">
            <Routes>
              <Route path="/" element={<PublicRoute component={Home} />} />
              <Route
                path="/registration"
                element={<PublicRoute component={RegistrationForm} />}
              />
              <Route
                path="/authorization"
                element={<PublicRoute component={AuthorizationForm} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute component={Contacts} />}
              />
            </Routes>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
