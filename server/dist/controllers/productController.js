export let products = [
    { id: 1, name: "T-shirt", price: 19.99 },
    { id: 2, name: "Jeans", price: 49.99 },
    { id: 3, name: "Sneakers", price: 89.99 },
    { id: 99, name: "Sneakers", price: 89.99 }
];
export const getProducts = (_req, res) => {
    res.json(products);
};
export const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    // const index = products.findIndex(product => product.id === id);
    products = products.filter(product => product.id !== id);
    res.json({ message: 'Product removed successfully' });
};
//# sourceMappingURL=productController.js.map