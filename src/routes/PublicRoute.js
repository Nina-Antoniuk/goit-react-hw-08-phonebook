import { Navigate } from 'react-router-dom';
import { isAuthState } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

function PublicRoute({ component: Component }) {
  const auth = useSelector(isAuthState);

  return <>{auth ? <Navigate to="/contacts" /> : <Component />}</>;
}
export default PublicRoute;
