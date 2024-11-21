import {Router} from 'express';
import {UsuarioController} from '../controles/UsuarioController.js'

const router = Router(); 

router.post('/novoUsuario', UsuarioController.NovoUsuario);

export default router;