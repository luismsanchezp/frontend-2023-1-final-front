import { Route, Navigate } from 'react-router-dom';
import { verifyToken } from '../utils/jwt';

export const AuthProvider = ({ element, ...rest }) => {

  const accessToken = localStorage.getItem('accessToken');
  const decodedToken = verifyToken(accessToken);

  return decodedToken !== null ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/signin" replace />
  );
};
