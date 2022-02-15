import knexObj from "knex";

// export const connectionInfo = {
//     host : '127.0.0.1',
//     port : 3333,
//     user : 'root',
//     password : '',
//     database : 'personalweb'
// }
//
// const knex = knexObj({
//     client: 'mysql2',
//     connection: connectionInfo,
//     pool: { min: 0, max: 20 }
// });

export const connectionInfo = {
    host : 'ec2-35-175-68-90.compute-1.amazonaws.com',
    port : 5432,
    user : 'xgyvuqhswxxkgw',
    password : 'bb014ff3c7c14799605821f1a0d300748d33574dc3b8008cd51d40fb7f992d9b',
    database : 'dfjvqsb3d18759',
    ssl: {
        rejectUnauthorized:false
    },
    native:true
}

const knex = knexObj({
    client: 'pg',
    version: '8.7.3',
    connection: connectionInfo,
    pool: { min: 0, max: 20 }
    // client: 'pg',
    // connection: process.env.PG_CONNECTION_STRING,
    // searchPath: ['knex', 'public'],
});

export default knex;