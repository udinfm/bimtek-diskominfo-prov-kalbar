/*
    All routes goes here
*/

//import controller
const Info = require("@app/controllers/info")

module.exports = app=>{
    app.get("/JumlahData/",Info.jumlahData)//jumlah data
}