import { Router } from 'express';
import multer from 'multer';

import Controller from './controllers';
import uploadConfig from './config/upload';

const router = Router();
const upload = multer(uploadConfig);

router.get('/health-check', Controller.healthCheck);
router.post('/upload/transactions', upload.array('file'), Controller.index);

export default router;
