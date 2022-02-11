import knexObj from "knex";

export const connectionInfo = {
    host : '127.0.0.1',
    port : 3333,
    user : 'root',
    password : '',
    database : 'personalweb'
}

const knex = knexObj({
    client: 'mysql2',
    connection: connectionInfo,
    pool: { min: 0, max: 20 }
});

export default knex;