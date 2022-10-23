import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    let total = 0;
    let shipinng = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipinng = shipinng + product.shipping;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipinng + tax;
    return (
        <div className='cart'>
            <h1>Order samary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shopping: ${shipinng}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;