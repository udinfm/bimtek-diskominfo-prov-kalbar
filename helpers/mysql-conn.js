//load config db
//using env
require('dotenv/config')

exports.knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST,
      user : process.env.MYSQL_USERNAME,
      password : process.env.MYSQL_PASSWORD,
      database : process.env.MYSQL_DBNAME,
      timezone : 'Asia/Jakarta',
    },
    pool: { min: 0, max: 7  }
});