import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaRupeeSign } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntIncrese,qntydecrease,dataRemove } from "../cartSlice";
import { Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";




const Cartdata=()=>{
   const prodata=useSelector(state=>state.mycart.cart);
   const disptach=useDispatch();
   const navigate = useNavigate();
 let sno=0;
 let netAmount=0;
   const ans=prodata.map((key)=>{
      netAmount+=key.prize*key.qnty;
      sno++;
      return(
         <>
            <tr>
               <td>{sno}</td>
               <td> <img src={key.img} width="100"height="100" /></td>
               <td>{key.name}</td>
               <td>{key.categry}</td>
               <td>{key.prize}</td>
               <td style={{fontSize:"20px"}}>
                  <a href="#" onClick={()=>{disptach(qntydecrease({id:key.id}))}}>
                     <FaCircleMinus />
                  </a>
                  {key.qnty}
                  <a href="#" onClick={()=>{disptach(qntIncrese({id:key.id}))}}>
                     <FaPlusCircle />
                  </a>
               </td>
               <td>{key.prize*key.qnty}</td>
               <td>
                  <Button onClick={()=>{disptach(dataRemove({id:key.id}))}}>Remove</Button>
                  </td>
            </tr>
         </>
      )
   })
   return(
      <>
      <h1>my cart</h1>
      <h2><FaRupeeSign />{netAmount}</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th> </th>
          <th>Product Name</th>
          <th>categrary</th>
          <th>Price</th>
          <th>quantity</th>
          <th>Total Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
      <br />
      <div style={{display:"Flex", justifyContent:"right", paddingRight:"50px"}}>
         <Button onClick={()=>{navigate("/checkout")}}>Checkout</Button>
      </div>
      </>
   )
}
export default Cartdata;