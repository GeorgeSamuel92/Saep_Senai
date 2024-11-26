<<<<<<< HEAD
import { Router } from "express";
import {UsuarioController} from "../controllers/UsuarioController.js"
import {TarefaController} from "../controllers/TarefaController.js"
const router = Router();

router.post('/novoUsuario', UsuarioController.novoUsuario);
router.get('/listarUsuarios', UsuarioController.listarUsuarios);
router.post('/novaTarefa', TarefaController.novaTarefa);
router.get('/listarTarefas', TarefaController.listarTarefas);
=======
import {Router} from 'express';
import {UsuarioController} from '../controles/UsuarioController.js'

const router = Router(); 

router.post('/novoUsuario', UsuarioController.NovoUsuario);
>>>>>>> 1c013276b611b451ea251b768094a0cec1e69c2e

export default router;