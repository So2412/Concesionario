const mysql=require('mysql');//conecta la base de datos que se creo en mysql
module.exports=()=>
mysql.createConnection({
    host:'localhost',//nombre del host de la base
    user:'root',//nombre del user de la base
    password:'',//contraseña del user(si hay contraseña)
    database:'carros'//Nombre de la base de datos que se esta utilizando
})