import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>order samary</h1>
            <p>Selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;