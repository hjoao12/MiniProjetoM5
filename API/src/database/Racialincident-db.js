import { RacialIncidentReport } from '../models/Racialincident-model.js';

// Database  de incidentes raciais
export const racialIncidents = [
    new RacialIncidentReport(
        1,
        "2023-10-15",
        "São Paulo, SP",
        "Recusa de atendimento em restaurante por motivação racial",
        "alta"
    ),
    new RacialIncidentReport(
        2,
        "2023-11-20",
        "Rio de Janeiro, RJ",
        "Comentários racistas no ambiente de trabalho",
        "média"
    ),
    new RacialIncidentReport(
        3,
        "2023-12-05",
        "Belo Horizonte, MG",
        "Perfil racial em abordagem policial",
        "alta"
    )
];
