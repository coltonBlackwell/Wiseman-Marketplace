import { Request, Response } from 'express';

interface Product {
  id: number;
  name: string;
  price: number;
}

let products: Product[] = [
  { id: 1, name: "T-shirt", price: 19.99 },
  { id: 2, name: "Jeans", price: 49.99 },
  { id: 3, name: "Sneakers", price: 89.99 },
  { id: 99, name: "Sneakers", price: 89.99 }
];

export const getProducts = (_req: Request, res: Response) => {
  res.json(products);
};

export const deleteProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  // const index = products.findIndex(product => product.id === id);

  products = products.filter(product => product.id !== id);
  res.json({ message: 'Product removed successfully' });
};