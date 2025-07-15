import express from 'express';
import racialIncidentRouter from './src/routes/Racialincident-router.js';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));




const app = express();
app.use(express.json());

app.use('/incidents', racialIncidentRouter);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
