import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes)

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});

// import express, { Request, Response } from 'express';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// let products: Product[] = [
//   { id: 1, name: "T-shirt", price: 19.99 },
//   { id: 2, name: "Jeans", price: 49.99 },
//   { id: 3, name: "Sneakers", price: 89.99 },
//   { id: 99, name: "Sneakers", price: 89.99 }
// ];

// app.get('/api/products', (_req: Request, res: Response) => {
//   res.json(products);
// });

// app.delete('/api/products/:id', (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const index = products.findIndex(product => product.id === id);

//   products = products.filter(product => product.id !== id);
//   res.json({ message: 'Product removed successfully' });
// });

// app.listen(4000, () => {
//   console.log('Server running on http://localhost:4000');
// });
