import { createContext, useContext } from "react";

export const UserSessionContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useUserSession = () => {
  const { user, login, logout } = useContext(UserSessionContext);
  return { user, login, logout };
};
