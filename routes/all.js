/*
    All routes goes here
*/

//import controller
const Info = require("@app/controllers/info")

module.exports = app=>{
    app.get("/JumlahData/",Info.jumlahData)//jumlah data

    //sequential
    app.get('/Sequential/:page/:limit',Info.sequential)

    //concurrent
    app.get('/Concurrent/:page/:limit',Info.concurrent)
}