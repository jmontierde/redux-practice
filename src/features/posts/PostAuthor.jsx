import { useSelector } from "react-redux";

const PostAuthor = (userId) => {
  const users = useSelector((state) => state.users);

  console.log("userId", users);

  const author = users.find((user) => user.id === userId);

  console.log("author", author);

  return <div>by {author ? author.name : "Unknown Author"}</div>;

  // return <div>a</div>;
};

export default PostAuthor;
