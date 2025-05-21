import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
let products = [
    { id: 1, name: "T-shirt", price: 19.99 },
    { id: 2, name: "Jeans", price: 49.99 },
    { id: 3, name: "Sneakers", price: 89.99 },
    { id: 99, name: "Sneakers", price: 89.99 }
];
app.get('/api/products', (_req, res) => {
    res.json(products);
});
app.delete('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(product => product.id === id);
    //   if (index === -1) {
    //     return res.status(404).json({ error: 'Product not found' });
    //   }
    products = products.filter(product => product.id !== id);
    res.json({ message: 'Product removed successfully' });
});
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
//# sourceMappingURL=index.js.map