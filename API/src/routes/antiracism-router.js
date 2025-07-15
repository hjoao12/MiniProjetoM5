// antiracism-router.js
import express from 'express';
import { listResources, addResource } from '../controllers/antiracism-controller.js';

const router = express.Router();

router.get('/', listResources);
router.post('/', addResource);

export default router;