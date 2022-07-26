/*
    Main File
*/

const modules = require('./concurrent-modules')

console.log('Menjalankan module')


const jalankan = async (jumlahLoopIn)=>{
    try{
        //concurrent
        const jalankanModule = await Promise.all([
            modules.module_satu(jumlahLoopIn),
            modules.module_dua(jumlahLoopIn),
            modules.module_tiga(jumlahLoopIn)
        ])

        if(jalankanModule[0] == true && jalankanModule[1] == true && jalankanModule[3] == true){
            return true
        }

        //sequential
        // let jalankanModule_1 = await modules.module_satu(jumlahLoopIn)
        // let jalankanModule_2 = await modules.module_dua(jumlahLoopIn)
        // let jalankanModule_3 = await modules.module_tiga(jumlahLoopIn)
        
        // if(jalankanModule_1 == true && jalankanModule_2 == true && jalankanModule_3 == true){
        //     return true
        // }

        
    }catch(err){
        console.error('Terjadi error',err)
    }
}

const jumlahLoop = 10
jalankan(jumlahLoop).then(data=>{
    if(data == true){
        console.log('Menjalankan module selesai')
    }
},err=>{
    console.error('Terjadi error',err)
})

