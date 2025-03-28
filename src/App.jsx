import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Cartdata from "./pages/cartData";
import Productdisplay from "./pages/productdisplay"; 
import Wireless from "./pages/wireless";
import Neakband from "./pages/neakband";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="cartdata" element={<Cartdata/>}/>
          <Route path="wireless" element={<Wireless/>}/>
          <Route path="neakband" element={<Neakband/>}/>
          <Route path="productdisplay/:id" element={<Productdisplay/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;