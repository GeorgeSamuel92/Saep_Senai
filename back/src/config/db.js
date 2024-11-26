import mysql2 from 'mysql2/promise.js';

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
    })

    global.connection = con;
    return con;
}

export default connection;