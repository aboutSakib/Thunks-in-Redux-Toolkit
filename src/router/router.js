import { createBrowserRouter } from "react-router-dom";
import AddProductForm from "../pages/AddProduct";
import Cart from "../pages/Cart";
import ClassComponents from "../pages/ClassComponents";
import PostList from "../pages/PostList";
import Root from "../pages/Root";
import Shop from "../pages/Shop";
import Todos from "../pages/Todos";
import UserList from "../pages/UserList";
import CounterApp from "./../components/CounterApp";

export const ourRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", index: true, element: <Shop /> },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/counter",
        element: <CounterApp />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      { path: "/add-product", element: <AddProductForm /> },
      { path: "/Class-Components", element: <ClassComponents /> },
      { path: "/PostList", element: <PostList /> },
      { path: "/UserList", element: <UserList /> },
    ],
  },
]);
