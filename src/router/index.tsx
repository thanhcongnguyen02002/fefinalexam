import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import UserList from "../component/UserList";
import LayOut from "../component/LayOut";
import ProductList from "../component/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
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
