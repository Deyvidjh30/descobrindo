import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import diretoriaRoutes from './routes/diretoriaRoutes.js';
import membershipRoutes from './routes/membershipRoutes.js';
import donationRoutes from './routes/donationRoutes.js';
import { authenticate } from './middleware/authMiddleware.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/directorias', authenticate, diretoriaRoutes);
app.use('/api/memberships', authenticate, membershipRoutes);
app.use('/api/donations', authenticate, donationRoutes);

app.listen(3001, () => {
  console.log('API running on http://localhost:3001');
});
