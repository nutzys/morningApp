import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createImage = async (post_id, image) => {
  const formData = new FormData();

  formData.append("images", {
    uri: image.uri,
    type: image.type,
    name: image.fileName,
  });

  formData.append("post_id", post_id);

  console.log(formData);

  const token = await AsyncStorage.getItem("token");

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };
  return await axios
    .post("http://172.20.10.3:8080/api/upload", formData, {
      headers: headers,
    })
    .then((res) => console.log("Sent!"))
    .catch((err) => console.log(err));
};
