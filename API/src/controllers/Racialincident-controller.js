import { getIncidents, reportIncident } from '../services/Racialincident-service.js';

export const listIncidents = async (req, res) => {
  try {
    const incidents = await getIncidents();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createIncidentReport = async (req, res) => {
  try {
    const incident = await reportIncident(req.body);
    res.status(201).json(incident);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
