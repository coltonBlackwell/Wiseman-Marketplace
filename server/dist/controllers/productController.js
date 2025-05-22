export const products = [
    { id: 1, name: "T-shirt", price: 19.99 },
    { id: 2, name: "Jeans", price: 49.99 },
    { id: 3, name: "Sneakers", price: 89.99 },
    { id: 99, name: "Sneakers", price: 89.99 }
];
export const getProducts = (_req, res) => {
    res.json(products);
};
// export const deleteProduct = (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const index = products.findIndex(product => product.id === id);
//   if (index !== -1) {
//     products.splice(index, 1); // 👈 Modify in-place
//   }
//   res.json({ message: 'Product removed successfully' });
// };
//# sourceMappingURL=productController.js.map