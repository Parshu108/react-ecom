import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Cartdata from "./pages/cartData";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="cartdata" element={<Cartdata/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;