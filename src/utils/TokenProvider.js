import { useState } from "react";
import TokenContext from "./TokenContext";

const TokenProvider = (props) => {
  const [token, setToken] = useState("");

  const isLogin = !!token;

  const addTokenToCtx = (token) => {
    setToken(token);
  };
  const clearTokenFromCtx = () => {
    setToken("");
  };

  const tokenCtx = {
    token: token,
    loginStatus: isLogin,
    addToken: addTokenToCtx,
    clearToken: clearTokenFromCtx,
  };
  return (
    <TokenContext.Provider value={tokenCtx}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
