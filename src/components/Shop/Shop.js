import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    
    useEffect( () => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const hadleAddToCart = (product) => {
        const newCart = [...cart, product];
        if(newCart.length <= 4){
            setCart(newCart);
        }
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map( product=> <Product product={product} key={product.id} hadleAddToCart={hadleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;