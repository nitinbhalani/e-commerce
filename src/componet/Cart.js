import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {Card, Button} from 'react-bootstrap'
import { remove } from '../Redux Toolkit/Cartslice';

const Cart = () => {
  const dispatch = useDispatch()
  const removeCart =(id)=>{
     dispatch(remove(id))
  }
  const Product = useSelector(state=>state.cart)
  
 const Cards =  Product.map(products =>(
    <div className='col-md-3' style={{marginBottom:"10px"}}>
      <Card key={products.id} className='h-100'>
    <Card.Img variant="top" src={products.image} style={{width:"100px",height:"130px",margin:"auto"}} />
    <Card.Body>
      <Card.Title>{products.title}</Card.Title>
      <Card.Text>
       ${products.price}
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{background:"white"}}>
      <Button variant="danger" onClick={()=>removeCart(products.id)} >Remove</Button>

    </Card.Footer>
  </Card>

    </div>
  ))
  return (
    <div className='row'>
      {Cards}
      
    </div>
  )
}

export default Cart
