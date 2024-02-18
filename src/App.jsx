import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Postlist from "./features/posts/Postlist";
import AddPostForm from "./features/posts/AddPostForm";
import UsersList from "./features/users/UsersList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Postlist />,
    },
    {
      path: "post",
      children: [
        {
          path: "add",
          element: <AddPostForm />,
        },
      ],
    },
    {
      path: "users",
      element: <UsersList />,
    },
    {
      path: "counter",
      element: <Counter />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
