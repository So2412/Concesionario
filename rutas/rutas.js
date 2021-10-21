const express=require('express');
const rutas=express.Router();
const controller=require('../controlador/controller');//ejecuta las funciones que estan escritas en el controller
rutas.get('/',controller.index);//Permite ingresar al login principal
rutas.post('/login',controller.login);
rutas.get('/menua',controller.inicio);
rutas.get('/menub',controller.iniciod);
rutas.get('/menuc',controller.menuc);
rutas.get('/datosp',controller.datosp);//Ayuda a consultar los datos de la tabla usuarios y los muestra en la terminal
rutas.get('/usuario',controller.consultageneral);
rutas.get('/datact',controller.actualizard);
rutas.get('/datactu',controller.actualizarda);
rutas.get('/regsve',controller.reve);
rutas.get('/regsveh',controller.reveh);
rutas.get('/cona1',controller.conau);
rutas.get('/cona2',controller.conca);
rutas.get('/cona3',controller.concm);
rutas.get('/cona4',controller.confu);
rutas.get('/cona5',controller.conbu);
rutas.get('/conpre',controller.filtro);
rutas.post('/filtro',controller.filtro);
rutas.post('/frminsertar',controller.insertar);//Permite que al inngresar los datos en el formulario, queden guardados y encriptados en la base;//permite que una pagina se redireccione a la vista de clienterutas.ps
rutas.post('/frminsertarp',controller.insertarp);
rutas.post('/frminsertarv',controller.insertarv);
rutas.post('/frminsertarve',controller.insertarve);
rutas.post('/actualizar',controller.actualizar);
rutas.post('/actualizarp',controller.actualizarp);
rutas.post('/actualizardp',controller.actualip);
rutas.post('/eliminar',controller.eliminar);
rutas.post('/eliminarp',controller.eliminarp);
rutas.get('/cerrar',controller.cerrar);



module.exports=rutas
