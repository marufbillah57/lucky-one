import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {img, name} = cart;
    console.log(cart)
    // console.log(cart);
    let img;
    let name;
    for(const product of cart){
        img = product.img;
        name = name + product.name;
    }

    

    return (
        <div className='details-container'>
            <h1>Selected Clothes: </h1>
            <div className="deatils">
                {/* <img src={img} alt="" /> */}
                <li className='name'>{name}</li>
            </div>
            <div className='btns'>
                <button className='choose-btn'>Choose 1 For Me</button>
                <button className='again-btn'>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;