import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const isAdmin = (): boolean => {
  const token = Cookies.get('id') || '';
  try {
    const decodedToken:any = jwtDecode(token);
    if (decodedToken?.role === 'admin') {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
  return false;
};
