import axios from "axios";

export const createImage = async (post_id, images) => {
  const formData = new FormData();

  images.forEach((image, index) => {
    formData.append(`images[${index}]`, {
      uri: image,
      name: `image_${index}.jpg`,
      type: "image/jpeg",
    });
  });
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  return await axios
    .post("http://172.20.10.3:8080/api/upload", formData, { headers: headers })
    .then((res) => console.log("Data sent"))
    .catch((err) => console.log(err));
};
