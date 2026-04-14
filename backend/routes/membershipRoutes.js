import { Router } from 'express';
import { request } from '../controllers/membershipController.js';

const router = Router();
router.post('/request', request);

export default router;
