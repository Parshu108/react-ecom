import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';


const Cartdata=()=>{
   const prodata=useSelector(state=>state.mycart.cart);
 let sno=0;
   const ans=prodata.map((key)=>{
      sno++;
      return(
         <>
            <tr>
               <td>{sno}</td>
               <td><img src={key.img} width="100px"height="100px"  /></td>
               <td>{key.name}</td>
               <td>{key.prize}</td>
            </tr>
         </>
      )
   })
   return(
      <>
      <h1>my cart</h1>
      <Table >
      <thead>
        <tr>
          <th>sno</th>
          <th> </th>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
      </Table>
      </>
   )
}
export default Cartdata;