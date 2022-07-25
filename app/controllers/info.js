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

//daftar data sequential
exports.sequential = async (req,res)=>{
    try{
        let page = req.params.page || 1
        let limit = req.params.limit || 10

        //parse params
        page = parseInt(page)
        limit = parseInt(limit)


        const jumlahData = await getter.jumlahData()
        const jumlahHalaman = await getter.jumlahHalaman(limit)
        const daftarData = await getter.daftarData(page,limit)

        res.send({
            hasil: "success",
            data: {
                jumlahdata: jumlahData,
                jumlahhalaman: jumlahHalaman,
                data: daftarData
            }
        })

    }catch(err){
        console.log('terjadi error',err)
        res.send({
            hasil: "error",
            pesan: err
        })
    }
}

//daftar data concurrent
exports.concurrent = async (req,res)=>{
    try{
        let page = req.params.page || 1
        let limit = req.params.limit || 10

        //parse params
        page = parseInt(page)
        limit = parseInt(limit)

        const dataModel = await Promise.all(
            [
                getter.jumlahData(),
                getter.jumlahHalaman(limit),
                getter.daftarData(page,limit)
            ]
        )

        res.send({
            hasil: "success",
            data: {
                jumlahdata: dataModel[0],
                jumlahhalaman: dataModel[1],
                data: dataModel[2]
            }
        })

    }catch(err){
        console.log('terjadi error',err)
        res.send({
            hasil: "error",
            pesan: err
        })
    }
}