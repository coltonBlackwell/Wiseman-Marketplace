export const products = [
    { id: 1, name: "T-shirt", price: 19.99, inCart: false },
    { id: 2, name: "Jeans", price: 49.99, inCart: false },
    { id: 3, name: "Sneakers", price: 89.99, inCart: false },
];
export const getProducts = (_req, res) => {
    res.json(products);
};
//# sourceMappingURL=productController.js.map