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

// ================== CRITICAL FIXES ================== //
// 1. CORS Configuration (Render + Localhost)
app.use(cors({
  origin: [
    "https://wiseman-marketplace-1.onrender.com", // Frontend (NO trailing slash!)
    "http://localhost:3000",                      // Frontend dev server
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],      // Allowed methods
  credentials: true,                              // Enable cookies/auth if needed
}));

// 2. Body Parser Middleware
app.use(express.json());

// 3. API Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// 4. Static Files (Fix path for Render)
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// 5. Health Check Endpoint (Required for Render)
app.get('/', (req, res) => {
  res.status(200).send('Backend is live!');
});

// 6. Handle 404 Errors (Catch-all route)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ================== SERVER START ================== //
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});