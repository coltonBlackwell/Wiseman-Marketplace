import { products } from './productController.js';
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }
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
export const getCart = (_req, res) => {
    res.json(cart);
};
//# sourceMappingURL=cartController.js.map