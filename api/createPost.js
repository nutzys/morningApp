import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createPost = async (user_id, title, content, created_at) => {
  const datas = {
    user_id: user_id,
    title: title,
    content: content,
    created_at: created_at,
  };

  const token = await AsyncStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return await axios
    .post("http://172.20.10.3:8080/api/post", datas, { headers: headers })
    .then((res) => {
      if (res.status === 200) {
        return res;
      }
    })
    .catch((err) => console.log(err));
};
