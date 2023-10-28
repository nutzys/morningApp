import { createContext, useEffect, useState } from "react";
import { createUser } from "../api/createUser";
import { loginUser } from "../api/loginUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({
  token: "",
  user: "",
  makeUser: () => {},
  loggedUser: () => {},
  logout: () => {},
});

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  const makeUser = (email, name, password) => {
    createUser(email, name, password);
  };

  const loggedUser = async (email, password) => {
    const users = await loginUser(email, password);
    const tokenData = await AsyncStorage.setItem("token", users.token);
    setUser(users.user);
    setToken(users.token);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  const value = {
    token: token,
    user: user,
    makeUser: makeUser,
    loggedUser: loggedUser,
    logout: logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
