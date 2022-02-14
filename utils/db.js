import knexObj from "knex";

export const connectionInfo = {
    host : 'connectionInfo',
    port : 5432,
    user : 'xgyvuqhswxxkgw',
    password : 'bb014ff3c7c14799605821f1a0d300748d33574dc3b8008cd51d40fb7f992d9b',
    database : 'personalweb'
}

const knex = knexObj({
  client: 'pg',
  version: '7.2',
  connection: connectionInfo,
  pool: { min: 0, max: 20 }
});

export default knex;
