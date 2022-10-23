import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, storedShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();


    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCard = storedShoppingCart();
        const savedCard = [];
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct)

            }
        }
        setCart(savedCard)
    }, [products])



    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exsist = cart.find(product => product.id === selectedProduct.id);
        if (!exsist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exsist.quantity = exsist.quantity + 1;
            newCart = [...rest, exsist];
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='card-and-product-container-gap'>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;