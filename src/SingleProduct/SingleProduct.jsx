import React from 'react'
import './SingleProduct.scss';
import axios from 'axios';
import {BASE_URL} from '../Utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa';
import {AiFillPlusSquare} from 'react-icons/ai';
import {AiFillMinusSquare} from 'react-icons/ai';
import {useDispatch} from 'react-redux';
import {addProduct} from '../Redux/Slices/cartSlice';
import {Link} from 'react-router-dom'
 
const SingleProduct = () => {
    const dispatch = useDispatch();
    const param = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    useEffect(()=> {
    const getProducts = async () => {
     const res = await axios.get(BASE_URL + `/products/${param.id}`);
     setProduct(res.data);
    }
    getProducts();

    },[param.id]);

 
    const handleClick = () => {
        dispatch (
        addProduct({...product, quantity})
        )
    }

    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };
    
            return (
              <div className='Single-product'>
                    <img src={product.image?.url} className='Single-photo' alt={product.title}/>
                    <div className='Single-text'>
                    <h6 className='Single-title'>{product.title}</h6>
                    <p>{product.description}</p>
                    <div className="Single-icons">
                        <button className='cart-button' onClick={handleClick}>
                         <FaCartPlus/>
                        </button>
                        <div className="Single-quantity">
                          <AiFillMinusSquare  onClick={() => handleQuantity("dec")}/>
                               <p>{quantity}</p>
                          <AiFillPlusSquare  onClick={() => handleQuantity("inc")}/>
                        </div>
                    </div>
                    <Link to='/'>
                    <button className="Single-button">back home</button>
                    </Link>
                    </div>
                </div>
            );
        
    
}

export default SingleProduct