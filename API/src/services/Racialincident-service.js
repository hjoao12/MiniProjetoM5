import { racialIncidents } from '../database/Racialincident-db.js';
import { RacialIncidentReport } from '../models/Racialincident-model.js';

export const getIncidents = async () => {
  return racialIncidents;
};

export const reportIncident = async (incidentData) => {
  const { date, location, description, severity } = incidentData;
  if (!date || !location || !description || !severity) {
    throw new Error('Todos os campos são obrigatórios');
  }
  const newIncident = new RacialIncidentReport(
    racialIncidents.length + 1,
    date,
    location,
    description,
    severity
  );
  racialIncidents.push(newIncident);
  return newIncident;
};
