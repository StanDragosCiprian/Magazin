import Cookies from "js-cookie";
export const isAdmin = (): boolean => {
  if (Math.floor(Number(Cookies.get("id"))) === 8923238) {
    return true;
  } else {
    return false;
  }
};
