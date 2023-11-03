import { createContext, useContext, useState } from "react";
import { createPost } from "../api/createPost";
import { createImage } from "../api/createImage";
import { UserContext } from "./user-context";

export const PostContext = createContext({
  create: () => {},
});

const PostContextProvider = ({ children }) => {
  const userCtx = useContext(UserContext);

  const create = async (title, content, images) => {
    const result = await createPost(
      userCtx.user.id,
      title,
      content,
      new Date()
    );
    //console.log(result.data.posts.id);
    //console.log(images);
    createImage(result.data.posts.id, images);
  };

  const values = {
    create: create,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostContextProvider;
