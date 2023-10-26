import axios from "axios";

export const loginUser = (email, password) => {
  const data = {
    email: email,
    password: password,
  };
  return axios
    .post("http://172.20.10.3:8080/api/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        console.log("die");
      }
    })
    .catch((err) => console.log(err));
};
