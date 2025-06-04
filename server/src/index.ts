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

// Configure CORS (adjust allowed origins as needed)
app.use(cors({
  origin: [
    "https://wiseman-marketplace-1.onrender.com", // Your frontend URL (if hosted)
    "http://localhost:4000",            // Local dev frontend
  ],
  credentials: true,
}));

app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Serve static files (adjust path if needed)
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

// Use Render's PORT or fallback to 4000 for local dev
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});