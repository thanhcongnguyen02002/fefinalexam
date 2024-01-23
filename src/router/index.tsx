import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import UserList from "../component/UserList";
import LayOut from "../component/LayOut";
import ProductList from "../component/ProductList";
import Loginpage from "../page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/admin",
    element: <LayOut />,

    children: [
      {
        path: "user",
        element: <UserList />,
      },
      {
        path: "product",
        element: <ProductList />,
      },
    ],
  },
]);
