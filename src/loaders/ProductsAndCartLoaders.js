import { storedShoppingCart } from "../utilities/fakedb";

export const ProductsAndCartLoaders = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get Cart
    const savedCart = storedShoppingCart()
    const initialCart = [];

    for (const id in savedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = savedCart[id]
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts)
        }
    }
    return { products: products, initialCart: initialCart }
};