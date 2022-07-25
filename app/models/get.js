/*
    Model Getter
*/

//load koneksi knex
const dbsettings = require("@helper/mysql-conn");//setup config db
const dbknex = dbsettings.knex //object knex


const Getter = ()=>{
    //no default constructor
}

//jumlah data
Getter.jumlahData = ()=>{
    return new Promise((resolve,reject)=>{
        dbknex('pegawai')
        .count('pegawai.nip', {as: 'jumlah'}).then(jumlah=>{
            resolve(jumlah[0].jumlah)
        }).catch((err)=>{
            console.error('Terjadi error',err)
            reject(err)
        })
    })
}

//jumlah halaman
Getter.jumlahHalaman = (limit)=>{
    return new Promise((resolve,reject)=>{
        Getter.jumlahData().then(jumlah=>{
            limit = parseInt(limit)
            const jumPage = Math.ceil(jumlah/limit)
            resolve(jumPage)
        },err=>{
            reject(err)
        })
    })
}

//daftar data
Getter.daftarData = (page,limit)=>{
    return new Promise((resolve,reject)=>{
        page    = parseInt(page)
        limit   = parseInt(limit)
        const offset = (page-1)*limit

        dbknex('pegawai')
        .limit(limit)
        .offset(offset)
        .orderBy('nama')
        .then(data=>{
            resolve(data)
        },err=>{
            reject(err)
        })
    })
}

module.exports = Getter