// Controla as rotas, ou seja o caminho da URl
// src/routes/bruxoRoutes.js
import { Router } from 'express';
import * as BruxoController from './../controllers/bruxoController.js';

const router = Router();

router.get('/', BruxoController.listarTodos);
router.get('/:id', BruxoController.listarUm);
router.post('/', BruxoController.criar);
router.delete('/:id', BruxoController.deletar);
router.put('/:id', BruxoController.atualizar);

export default router;