import express from 'express';
import { getCart, addProduct, removeProduct } from '../controllers/cartController.js';
const router = express.Router();
router.post('/:id', addProduct);
router.delete('/:id', removeProduct);
router.get('/', getCart); // /api/cart GET
export default router;
//# sourceMappingURL=cartRoutes.js.map