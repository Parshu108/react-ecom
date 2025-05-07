import { FaShoppingCart } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Topheader=()=>{
  const navegite=useNavigate();
  const product=useSelector(state=>state.mycart.cart);
  console.log(product);
  const prlength=product.length;
  return(
    <>
    
      <div id="headerdata">
        <a href="#" onClick={()=>{navegite("./Cartdata")}}>
        <FaShoppingCart />
        </a>
        {prlength}
        <a href="#" onClick={()=>{navegite("./Customber")}}>
          <RiAdminFill />
        </a>
        
      </div>
    </>
  )
}
export default Topheader;