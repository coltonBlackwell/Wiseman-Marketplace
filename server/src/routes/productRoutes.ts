import express from 'express';
import { getProducts, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);
router.delete('/:id', deleteProduct);

export default router;