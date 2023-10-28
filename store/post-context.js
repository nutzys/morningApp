import { createContext, useContext, useState } from "react";
import { createPost } from "../api/createPost";
import { createImage } from "../api/createImage";
import { UserContext } from "./user-context";

export const PostContext = createContext({
  addTitle: () => {},
  addContent: () => {},
  create: () => {},
});

const PostContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userCtx = useContext(UserContext);

  const addTitle = (input) => {
    setTitle(input);
  };

  const addContent = (input) => {
    setContent(input);
  };

  const create = async (images) => {
    const result = await createPost(
      userCtx.token.user.id,
      title,
      content,
      new Date()
    );
    let post = result.data.posts;
    console.log(post);
    createImage(post.id, images);
  };

  const values = {
    addTitle: addTitle,
    addContent: addContent,
    create: create,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
