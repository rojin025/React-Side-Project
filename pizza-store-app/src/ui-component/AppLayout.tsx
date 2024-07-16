import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import LoaderAnimation from "./LoaderAnimation";

function AppLayout() {
  const nav = useNavigation();
  const isLoading = nav.state === "loading";

  return (
    <div className="grid h-96 bg-red-50">
      {isLoading && <LoaderAnimation />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
