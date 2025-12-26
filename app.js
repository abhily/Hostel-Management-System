import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import chiefRoutes from './routes/chief.js';
import wardenRoutes from './routes/warden.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ MongoDB (Atlas required on Vercel)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/chief', chiefRoutes);
app.use('/warden', wardenRoutes);

// Default route
app.get('/', (req, res) => {
  res.redirect('/chief/dashboard');
});

// ❌ DO NOT listen on Vercel
// app.listen(PORT)

// ✅ REQUIRED for Vercel
export default app;
