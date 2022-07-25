/*
    Controller terkait info data
*/

//load node modules
const config = require("config")

//load models
const getter = require('@app/models/get')//model getter

//info jumlah data
exports.jumlahData = (req,res)=>{
    getter.jumlahData().then(jumlah=>{
        res.send({
            hasil: "success",
            data: jumlah
        })
    },err=>{
        console.log('terjadi error',err)
        res.send({
            hasil: "error",
            pesan: err
        })
    })
}