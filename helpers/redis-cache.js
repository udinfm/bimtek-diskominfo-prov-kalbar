/*
    Redis Caching
*/

//using env
require('dotenv/config')

//load nodejs modules
exports.cache = require('express-redis-cache')({
    prefix: 'BIMTEK:DISKOMINFO',
    expire: 10,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    username: "default",
    password: process.env.REDIS_AUTH
})

