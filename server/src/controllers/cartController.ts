import { Request, Response } from 'express';
import { products, Product } from './productController.js'


let cart: Product[] = [
  //starts with an empty cart
];

export const addProduct = (req: Request, res: Response) => {

  // console.log(`HHEYYYOOOO ${req.params}`)

  const id = Number(req.params.id);

  // Find the product by id
  const productToAdd = products.find(c => c.id === id);

  // Add to cart
  cart.push(productToAdd);

  res.json({ message: 'Product added to cart successfully', cart });
};

export const removeProduct = (req: Request, res: Response) => {

  const id = Number(req.params.id);
  const index = cart.findIndex(product => product.id === id);
  if (index !== -1) {
    cart.splice(index, 1); // ✅ Modify shared array
  }
  res.json({ message: 'Product removed successfully' , cart});
};

export const getCart = (_req: Request, res: Response) => {
  res.json(cart);
};