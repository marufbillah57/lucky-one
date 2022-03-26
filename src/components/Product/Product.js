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
                <p>Add To Cart</p>
            </button>

        </div>
    );
};

export default Product;