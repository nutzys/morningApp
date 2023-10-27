import { createContext, useState } from "react";

export const PostContext = createContext({
  addTitle: () => {},
  addContent: () => {},
  setUid: () => {},
  setImgUrl: () => {},
});

const PostContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userId, setUserId] = useState("");

  const addTitle = (input) => {
    setTitle(input);
  };

  const addContent = (input) => {
    setContent(input);
  };

  const setUid = (input) => {
    setUserId(input);
  };

  const setImgUrl = (input) => {
    setImageUrl(input);
  };

  const createPost = () => {
    const post = {
      userId: userId,
      title: title,
      content: content,
      createdAt: new Date(Date.now()),
      imageUrl: imageUrl,
      likeCount: 0,
    };
    createPost(post);
  };

  const values = {
    addTitle: addTitle,
    addContent: addContent,
    setUid: setUid,
    setImgUrl: setImgUrl,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
