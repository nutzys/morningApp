import { createContext, useState } from "react";

export const PostContext = createContext({
  addTitle: () => {},
  addContent: () => {},
});

const PostContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTitle = (input) => {
    setTitle(input);
  };

  const addContent = (input) => {
    setContent(input);
  };

  const createPost = () => {
    const post = {
      title: title,
      content: content,
      createdAt: new Date(Date.now()),
      imageUrl: "",
      likeCount: "0",
    };
  };

  const values = {
    addTitle: addTitle,
    addContent: addContent,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
