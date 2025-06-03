import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
//# sourceMappingURL=index.js.map