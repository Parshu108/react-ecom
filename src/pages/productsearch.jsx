
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocard } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Productsearch=()=>{
  const [mydata,setdata]=useState([]);
  const [txtval, setTxtVal]= useState(""); 
  const disptach=useDispatch();
  const naviget =useNavigate();
  const handleProduct=async(e)=>{
   setTxtVal(e.target.value);
    let api=`http://localhost:3000/product/`;
    const resp=await axios.get(api);
    console.log(resp.data);
    setdata(resp.data);
  }
  const Prodisplay=(id)=>{
      naviget(`/productdisplay/${id}`);
  }

  const ans=mydata.map((key)=>{
   let myval= key.name.includes(txtval);
     console.log(myval);
     if (myval==true)
     {
    return(
      <>
        <Card style={{ width: '18rem' }}>
      <a href="#" onClick={()=>{Prodisplay(key.id)}}>
        <Card.Img variant="top" src={key.img} />
      </a>
      <Card.Body>
        <Card.Title>{key.name }</Card.Title>
        <Card.Title>{key.categry }</Card.Title>
        <Card.Text>
          <h3>Price:{key.prize}</h3>
        </Card.Text>
        <Button variant="primary" onClick={()=>{disptach(addtocard({id:key.id, name:key.name,categry:key.categry, prize:key.prize,img:key.img, qnty:1}))}}>Add to Card</Button>
      </Card.Body>
    </Card>
      </>
    )
   }
  })
   return(
      <>

           <center>
       <h1> Search Your Products</h1>
      
           Enter Product Name:- <input type='text' value={txtval} onChange={handleProduct} />
           </center> 
           <br />
           <hr />
      <div id='prdata'>
        {ans}
      </div>
      </>
   )
}
export default Productsearch;