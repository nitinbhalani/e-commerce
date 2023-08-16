import React, { useEffect, } from "react";
import { add } from "../Redux Toolkit/Cartslice";
import { useDispatch,useSelector } from "react-redux";
// import axios from 'axios'
import { Card, Button } from "react-bootstrap";
import { getProduct } from "../Redux Toolkit/ProductSlice";
const Products = () => {
  const dispatch = useDispatch();
  const {data:Product,status} = useSelector(state=> state.product)
  const addToCart = (products) => {
    dispatch(add(products));
  };
  // const dataFatch = async()=>{
  //     let res = await axios.get("https://fakestoreapi.com/products")
  //     console.log(res.data);
  //     setProduct(res.data)
  // }
  useEffect(() => {
    dispatch(getProduct())
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((res) => setProduct(res));
    // dataFatch()
    // eslint-disable-next-line
  }, []);

if(status === "pending"){
  return <p>Loading....</p>
}

if(status === "rejected"){
  return <p>Data not fetch</p>
}


  const card = Product.map((products) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={products.id} className="h-100">
        <Card.Img
          variant="top"
          src={products.image}
          style={{ width: "100px", height: "130px", margin: "auto" }}
        />
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>${products.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={() => addToCart(products)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{card}</div>;
};

export default Products;
