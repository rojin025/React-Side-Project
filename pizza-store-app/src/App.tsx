import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui-component/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui-component/AppLayout";
import Error from "./ui-component/Error";

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
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
        /** No errorElement is handling here; so it will be handled by parent errorElement.  */
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
        /** Each errorElement is handling there own route;  */
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
