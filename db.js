const mysql = require('mysql2/promise');
const app = require("./app");
async function connect() {
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1310',
        database:'crud'
    })

    console.log('Conectou ao MySQL!')
    global.connection = connection;
    return global.connection;
}
connect();

async function selectClientes(){
    const conn = await connect()
    const[rows] = await conn.query('SELECT * FROM clientes');
    return rows;
}

async function insertCliente(clientes){
    const conn = await connect()
    const sql = 'INSERT INTO clientes (nome,idade,uf ) VALUES (?,?,?);'
    return await conn.query(sql, [clientes.nome, clientes.idade, clientes.uf])
}

async function selectCliente(id){
    const conn = await connect()
    const sql = 'SELECT * FROM clientes WHERE id=?'
    const [rows] = await conn.query(sql, [id])
    return rows && rows.length > 0 ? rows[0] : {};
}

async function updateCliente(id, cliente){
    const conn = await connect()
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?;'
    return await conn.query(sql, [cliente.nome, cliente.idade, cliente.uf, id])
}

async function deleteCliente(id){
    const conn = await connect()
    return await conn.query('DELETE FROM clientes WHERE id=?;', [id])
}

module.exports = {selectClientes, selectCliente, insertCliente, updateCliente, deleteCliente};