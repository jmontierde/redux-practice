import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/counter/Counter";

function App() {
  const router = createBrowserRouter([
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
