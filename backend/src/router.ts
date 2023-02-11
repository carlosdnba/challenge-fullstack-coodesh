import { Router } from 'express';

import Controller from './controllers';

const router = Router();

router.get('/health-check', Controller.healthCheck);
router.post('/upload/transactions', Controller.index);

export default router;
