import Usuario from '../models/UsuarioModel.js'

export const UsuarioController = {
    NovoUsuario: async (req, res ) => {
        try {
            const {nome, email} = req.body;
            const usuario=new Usuario({ nome, email})
            const result = await usuario.insertUsuario();
            res.jon({ result});
            
        } catch (error) {
            res.json({ menssage: error})
        }
    }
}

