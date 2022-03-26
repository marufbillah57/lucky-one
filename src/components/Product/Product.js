import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({hadleAddToCart, product}) => {
    const {img, name, price} = product;
    // console.log(hadleAddToCart)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price: ${price}</p>
            </div>
            <button onClick={ ()=>hadleAddToCart(product)} className='btn'>
                <p className='btn-text'>Add To Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;