//load config db
//using env
require('dotenv/config')
const fs = require('fs')

exports.knex = require('knex')({
    client: 'mysql',
    connection: {
      user: 'bimtek',
      password: 'AVNS_-qJiWVGNZWanOQFCIXV',
      database: 'bimtek',
      host: 'private-db-mysql-blr1-27443-do-user-2156672-0.b.db.ondigitalocean.com',
      port: 25060,
      dialect: 'mysql',
      logging: true,
      force: true,
      timezone: 'Asia/Jakarta',
      pool: {
          max: 100,
          min: 0,
          idle: 200000,
          acquire: 1000000,
      },
      ssl: true,
      dialectOptions: {
          ssl: {
              ssl: true,
              cert: fs.readFileSync('../ca-certificate.crt')
          }
      }
    },
    pool: { min: 0, max: 7  }
});