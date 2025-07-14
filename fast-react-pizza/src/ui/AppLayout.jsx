import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader />}
      <Header />

        <div className="overflow-scroll">
            <main className=" max-w-3xl  mx-auto">
                <Outlet/>
            </main>
        </div>

      <CartOverview />
    </div>
  );
}
