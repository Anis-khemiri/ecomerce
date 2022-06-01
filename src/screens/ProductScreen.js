import React,{useEffect, useState} from "react";

import Rating from "../components/Rating";

import { Link,  Outlet,  useNavigate,  useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from './../components/LoadingBox';
import MessageBox from './../components/MessageBox';
import { detailsProduct } from "../actions/productActions";


export default function ProductScreen(props){


  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const productId = params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const navigate = useNavigate();
  
  

useEffect(()=>{
  dispatch(detailsProduct(productId));
}, [dispatch, productId]);
const addToCardHandler = () => {

  navigate(`/cart/${productId}?qty=${qty}`);

};
  return (
    <div>
    {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div>
       <Link to="/">Go Back</Link>
      <div className="row top">
               
       
        <div className="col-2">
          <img className="Large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <div>
            <h1>{product.name}</h1>
          </div>
       
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
         
          <div>
            <p>Price : ${product.price}</p>
          </div>
          <div>Description :{product.description}</div>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="Success"> In Stock</span>
                    ) : (
                      <span className="error">Unvailable</span>
                    )}
                  </div>
                </div>
              </li>
              {
                product.countInStock > 0 && (
                  <>
                  <li>
                  <div className="row">
                  <div>Qty</div>
                  </div>
                  <div>
                  <select value={qty} onChange={e => setQty(e.target.value)}>
                  {
                    [...Array(product.countInStock).keys()].map(
                      (x) => (
                        <option key={x+1} value={x + 1}>{x + 1}</option>
                      )
                            
                )
                  }
                  </select>
                  </div>
                  
                  </li>
                  <li>
                  <button onClick={addToCardHandler} 
                  className="primary block">
                  Add to Cart</button>
                </li>
                <Outlet />
                </>
                )
              }
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    )}
  </div>
    
  );
}
