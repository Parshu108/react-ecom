import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocard } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { MdStarRate } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
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
         <h1 style={{color: "rgb(0, 200, 255)"}}>our product</h1>
         
         <hr />
         <div id="prodata">
            <div>
               <img src={product.img} width="500" height="auto" />
            </div>
            <div id="prdetail">
               <h3>{product.name}</h3>
               <p>Bluetooth Earphone with 10mm drivers, Up to 60 Hours Nonstop Playback, Type-C charging, ASAP™ Charge</p>
               <h3 style={{color:"green"}}>This Product for:{product.categry}</h3>
               <h4 style={{color:"navy"}}>Price: {product.prize} <span>72% off</span></h4>
               <p><MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /> <IoStarHalf /></p>
               <Button variant="primary" onClick={()=>{disptach(addtocard({id:product.id, name:product.name,categry:product.categry, prize:product.prize, img:product.img, qnty:1}))}}>Add to Card</Button>
            </div>
         </div>
      </>
   )
}
export default Productdisplay;