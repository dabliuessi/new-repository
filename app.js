import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './rotas/usuario.js';
import { routerTarefa } from './rotas/tarefas.js';
import { database } from './database.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);
app.use(routerTarefa);

// await database.sync()

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
