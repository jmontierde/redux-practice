import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Postlist from "./features/posts/Postlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Postlist />,
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
