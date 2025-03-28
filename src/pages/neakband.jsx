
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocard } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Neakband=()=>{
  const [mydata,setdata]=useState([]);
  const disptach=useDispatch();
  const naviget =useNavigate();
  const loadData=async()=>{
    let api=`http://localhost:3000/product/?categry=Neckband`;
    const resp=await axios.get(api);
    console.log(resp.data);
    setdata(resp.data);
  }
  useEffect(()=>{
    loadData();
  },[])
  const Prodisplay=(id)=>{
      naviget(`/productdisplay/${id}`);
  }

  const ans=mydata.map((key)=>{
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
  })
   return(
      <>

    <h1 className='head'>Our Primium Products</h1>
      <div id='prdata'>
        {ans}
      </div>
      </>
   )
}
export default Neakband;