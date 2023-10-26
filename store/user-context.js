import { createContext, useState } from "react";
import { createUser } from "../api/createUser";
import { loginUser } from "../api/loginUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext({
  name: "",
  email: "",
  password: "",
  isAuth: "",
  authUser: "",
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  makeUser: () => {},
  setIsAuth: () => {},
  loggedUser: () => {},
  setAuthUser: () => {},
  logout: () => {},
});

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [authUser, setAuthUser] = useState({
    name: "",
    email: "",
    id: "",
  });

  const makeUser = () => {
    console.log(name);
    createUser(email, name, password);
  };
  const loggedUser = async () => {
    const users = await loginUser(email, password);
    await AsyncStorage.setItem("token", users.token);
    setToken(users.token);
    setAuthUser(users);
    setIsAuth(true);
  };

  const logout = async () => {
    //console.log(token);
    await AsyncStorage.removeItem("token");
    setToken(null);
    setAuthUser(null);
    setIsAuth(false);
  };

  const value = {
    name: name,
    email: email,
    password: password,
    isAuth: isAuth,
    authUser: authUser,
    setName: setName,
    setEmail: setEmail,
    setPassword: setPassword,
    makeUser: makeUser,
    setIsAuth: setIsAuth,
    loggedUser: loggedUser,
    setAuthUser: setAuthUser,
    logout: logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
