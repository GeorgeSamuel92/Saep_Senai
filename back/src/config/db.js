import mysql2 from 'mysql2/promise.js';

<<<<<<< HEAD
const connection = async () =>{
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection;

    }
    const con = await mysql2.createConnection({
        host: 'localhost',
        port: '3306',
        database: 'simulado_saep',
        user:'root',
        password: '1234',
        multipleStatements: true
=======
const connection = async () => {
    if (global.connection && global.connection.state !== 'disconnect'){
        return global.connecton;
    }
    const con =await mysql2.createConnection({
        host: 'localhost',
        port: '3306',
        database: 'simulado_saep',
        user: 'root',
        password: '1234',
        multipleStartements: true
>>>>>>> 1c013276b611b451ea251b768094a0cec1e69c2e
    })

    global.connection = con;
    return con;
}

export default connection;