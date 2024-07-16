import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import LoaderAnimation from "./LoaderAnimation";

function AppLayout() {
  const nav = useNavigation();
  const isLoading = nav.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-red-50">
      {isLoading && <LoaderAnimation />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
