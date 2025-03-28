import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocard } from '../cartSlice';
import { useDispatch } from 'react-redux';
const Productdisplay=()=>{
   const [product,setProduct]=useState({});
    const disptach=useDispatch();
   const {id}=useParams();
   const loadData=async()=>{
      let api=`http://localhost:3000/product/${id}`;
      const resp=await axios.get(api);
      setProduct(resp.data);
      
   }
   useEffect(()=>{
      loadData();
   },[]);
   return(
      <>
         <h1>our product:</h1>

         <div id="prdata">
            <div>
               <img src={product.img} width="500" height="auto" />
            </div>
            <div id="prdetail">
               <h3>{product.name}</h3>
               <h3 style={{color:"green"}}>This Product for:{product.categry}</h3>
               <h4 style={{color:"navy"}}>Price: {product.prize}</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nulla itaque iure nobis inventore dolores reprehenderit dolorem porro optio voluptatem.</p>
               <Button variant="primary" onClick={()=>{disptach(addtocard({id:product.id, name:product.name,categry:product.categry, prize:product.prize, img:product.img, qnty:1}))}}>Add to Card</Button>
            </div>
         </div>
      </>
   )
}
export default Productdisplay;