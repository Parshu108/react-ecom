import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/baner8.webp";
import ban2 from "../images/baner2.jpg";
import ban3 from "../images/baner5.webp";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtocard } from '../cartSlice';
import { useDispatch } from 'react-redux';
const Home=()=>{
  const [mydata,setdata]=useState([]);
  const disptach=useDispatch();
  const loadData=async()=>{
    let api=`http://localhost:3000/product`;
    const resp=await axios.get(api);
    console.log(resp.data);
    setdata(resp.data);
  }
  useEffect(()=>{
    loadData();
  },[])

  const ans=mydata.map((key)=>{
    return(
      <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.img} />
      <Card.Body>
        <Card.Title>{key.name }</Card.Title>
        <Card.Text>
          <h3>Price:{key.prize}</h3>
        </Card.Text>
        <Button variant="primary" onClick={()=>{disptach(addtocard({id:key.id, name:key.name, prize:key.prize,img:key.img, qnty:1}))}}>Add to Card</Button>
      </Card.Body>
    </Card>
      </>
    )
  })
   return(
      <>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={ban1} style={{width:"100%",height:"500px"}} />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban2} style={{width:"100%",height:"500px"}}/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3} style={{width:"100%",height:"500px"}}/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 className='head'>Our Primium Products</h1>
      <div id='prdata'>
        {ans}
      </div>
      </>
   )
}
export default Home;