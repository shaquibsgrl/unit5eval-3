import { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api

  const {toggleAuth, handleAuth} = useContext(AuthContext);

  
  return <div></div>;
};