import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props
    const { name, img, price, seller, ratings, } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price ${price}</p>
                <p><small>{seller}</small></p>
                <p><small>Ratings {ratings} Stars</small></p>

            </div>
            <button onClick={() => handleAddToCart(product)} className='button-cart'>
                <p>Add to cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>
    );
};

export default Product;