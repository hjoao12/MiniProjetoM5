import express from 'express';
import { listIncidents, createIncidentReport } from '../controllers/Racialincident-controller.js';

const router = express.Router();

router.get('/', listIncidents);
router.post('/', createIncidentReport);

export default router;
