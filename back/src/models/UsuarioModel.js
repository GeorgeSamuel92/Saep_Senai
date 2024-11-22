import connection from '../config/db.js';

class Usuario{
    constructor (pUsuario) {
        this.nome = pUsuario.nome;
        this.email = pUsuario.email;
    }

    async insertUsuario(){
        try {
            const conn = await connection();
            const pSql = "INSERT INTO USUARIO (NOME, EMAIL) VALUES (?,?);"
            const pValues = [this.nome, this.email]
            const [result] = await conn.query(pSql, pValues)
            console.log(result);

            return result;
        }catch (error) {
            throw error;
        }finally {
            await conn.release();
        }
    }
}

export default Usuario;