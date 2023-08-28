import { createContext } from "react";

const TokenContext = createContext({
  token: "",
  loginStatus: false,
  addToken: (token) => {},
  clearToken: () => {},
  changeLoginStatus: () => {},
});

export default TokenContext;
