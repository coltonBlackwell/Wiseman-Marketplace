import { products } from './productController.js';
let cart = [
//starts with an empty cart
];
export const addProduct = (req, res) => {
    const id = Number(req.params.id);
    // Find the product by id
    const productToAdd = products.find(c => c.id === id);
    // Prevent duplicate adds
    if (productToAdd.inCart) {
        res.status(400).json({ message: 'Product is already in the cart' });
    }
    // Add to cart and mark as inCart
    productToAdd.inCart = true;
    cart.push(productToAdd);
    res.json({ message: 'Product added to cart successfully', cart });
};
export const removeProduct = (req, res) => {
    const id = Number(req.params.id);
    const index = cart.findIndex(product => product.id === id);
    if (index !== -1) {
        cart.splice(index, 1); // ✅ Modify shared array
    }
    // Set inCart = false in the main products list
    const productToUpdate = products.find(product => product.id === id);
    if (productToUpdate) {
        productToUpdate.inCart = false;
    }
    res.json({ message: 'Product removed successfully', cart });
};
export const getCart = (_req, res) => {
    res.json(cart);
};
//# sourceMappingURL=cartController.js.map