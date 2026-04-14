import { Router } from 'express';
import { hub, list } from '../controllers/diretoriaController.js';

const router = Router();
router.get('/', list);
router.get('/:slug/hub', hub);

export default router;
