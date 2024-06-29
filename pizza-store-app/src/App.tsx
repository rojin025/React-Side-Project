import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui-component/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui-component/AppLayout";

/**
 * Data is fetching is done using loader
 *  {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      advance feature we are avoding the traditional apporach of waterfall strategy fetaching data while loading the component.
      Url
      Compoent
      Data Loading is tightly couppled.
 */
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
