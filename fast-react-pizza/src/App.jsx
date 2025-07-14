import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateUser from "./features/user/CreateUser.jsx";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import {action as updateOrderAction} from "./features/order/UpdateOrder.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/user",
        element: <CreateUser />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
