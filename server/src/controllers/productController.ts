import { Request, Response } from 'express';

export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "T-shirt", price: 19.99 },
  { id: 2, name: "Jeans", price: 49.99 },
  { id: 3, name: "Sneakers", price: 89.99 },
];

export const getProducts = (_req: Request, res: Response) => {
  res.json(products);
};