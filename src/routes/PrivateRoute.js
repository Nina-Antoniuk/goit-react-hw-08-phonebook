import { Navigate } from 'react-router-dom';
import { isAuthState } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

function PrivateRoute({ component: Component }) {
  const auth = useSelector(isAuthState);

  return <>{auth ? <Component /> : <Navigate to="/authorization" />}</>;
}
export default PrivateRoute;
