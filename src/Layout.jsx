import { Outlet } from "react-router-dom";
import Topheader from "./component/topheader";
import Topmenu from "./component/topmenu";
import Footer from "./component/footer";

const Layout=()=>{
  return(
    <>
    <Topheader/>
    <Topmenu/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default Layout;