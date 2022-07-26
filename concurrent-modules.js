//module 1
exports.module_satu = (jumlahNomor)=>{
    return new Promise((resolve,reject)=>{
        const setengah = Math.ceil(jumlahNomor/2)
        console.log('proses module satu akan berat di',setengah)
        let i = 1
        while(i <= jumlahNomor){
            if(i == setengah){
                setTimeout(()=>{
                    console.log("menjalankan module satu dg loop#",setengah)     
                },2000)
            }else{
                console.log("menjalankan module satu dg loop#",i)   
            }
            i++
        }

        if(i == jumlahNomor){
            resolve(true)
        }
    })
}

//module 2
exports.module_dua = (jumlahNomor)=>{
    return new Promise((resolve,reject)=>{
        const setengah = Math.ceil(jumlahNomor/2)
        console.log('proses module dua akan berat di',setengah)
        let i = 1
        while(i <= jumlahNomor){
            if(i == setengah){
                setTimeout(()=>{
                    console.log("menjalankan module dua dg loop#",setengah)
                },2000)
            }else{
                console.log("menjalankan module dua dg loop#",i)  
            }
            i++
        }

        if(i == jumlahNomor){
            resolve(true)
        }
    })
}

//module 3
exports.module_tiga = (jumlahNomor)=>{
    return new Promise((resolve,reject)=>{
        const setengah = Math.ceil(jumlahNomor/2)
        let i = 1
        while(i <= jumlahNomor){
            console.log("menjalankan module tiga dg loop#",i)  
            i++
        }

        if(i == jumlahNomor){
            resolve(true)
        }
    })
}