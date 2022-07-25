/*
    All routes goes here
*/

//import controller
const Info = require("@app/controllers/info")

//import cache
const modulcache = require("@helper/redis-cache")

module.exports = app=>{
    app.get("/JumlahData/",Info.jumlahData)//jumlah data

    //sequential
    app.get('/Sequential/:page/:limit',Info.sequential)

    //concurrent
    app.get('/Concurrent/:page/:limit',Info.concurrent)

    //concurrent & redis-caching
    app.get('/ConcurrentCache/:page/:limit', modulcache.cache.route(), Info.concurrent)
}