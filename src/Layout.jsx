import { Outlet } from "react-router-dom";
import Topmenu from "./component/topmenu";
import Footer from "./component/footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-surface-900">
      <Topmenu />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
