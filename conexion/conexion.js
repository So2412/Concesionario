const mysql=require('mysql');//conecta la base de datos que se creo en mysql
module.exports=()=>
mysql.createConnection({
    host:'b57bg2rxzq2nwqjolwac-mysql.services.clever-cloud.com',//nombre del host de la base
    user:'uows08isfjtusvib',//nombre del user de la base
    password:'usDvaL3Iw5um4YCEVzGb',//contraseña del user(si hay contraseña)
    database:'b57bg2rxzq2nwqjolwac'//Nombre de la base de datos que se esta utilizando
})