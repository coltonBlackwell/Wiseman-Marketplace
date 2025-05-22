import { products } from './productController.js';
let cart = [
//starts with an empty cart
];
export const addProduct = (req, res) => {
    // console.log(`HHEYYYOOOO ${req.params}`)
    const id = Number(req.params.id);
    // Find the product by id
    const productToAdd = products.find(c => c.id === id);
    // Add to cart
    cart.push(productToAdd);
    res.json({ message: 'Product added to cart successfully', cart });
};
export const removeProduct = (req, res) => {
    console.log('you hit the backend!!');
    // console.log("***** REQ PARAMS ********", req.params.id)
    // const id = Number(req.params.id);
    // const index = cart.findIndex(product => product.id === id);
    // console.log("*****CART SPLIIIICE *******", cart.splice(index, 1))
    const id = Number(req.params.id);
    const index = cart.findIndex(product => product.id === id);
    if (index !== -1) {
        cart.splice(index, 1); // ✅ Modify shared array
    }
    res.json({ message: 'Product removed successfully', cart });
};
export const getCart = (_req, res) => {
    res.json(cart);
};
//# sourceMappingURL=cartController.js.map