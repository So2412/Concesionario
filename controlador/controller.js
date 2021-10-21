const connection=require('../conexion/conexion');
const cnn=connection();
const {render}=require('ejs');//Ayuda a renderizar los archivos ejs
const bcryptjs=require('bcryptjs');//Permite que las claves se puedan encriptar

const controller={};


//LOGIN
controller.index=(req,res,next)=>{
    res.render('login');
    //res.send("error en controlador");
} 



controller.inicio=(req,res,next)=>{
  if(req.session.login){
      res.render('menua');
  }
  else{
      res.redirect('/');
  }
}
controller.iniciod=(req,res,next)=>{
    if(req.session.login){
        res.render('menub');
    }
    else{
        res.redirect('/');
    }
  }

controller.menuc=(req,res,next)=>{
    if(req.session.login){
        res.render('menuc');
    }
    else{
        res.redirect('/');
    }
}  


controller.consultageneral=(req,res,next)=>{
  /*if(req.session.login){*/
   cnn.query('SELECT * FROM usuarios',(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
            console.log(resbd)
            res.render('usuario',{datos:resbd});
        }
    }) 
  
 /*}
 else{
     res.redirect('/')
 }*/

}


controller.datosp=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT * FROM datosp',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('datosp',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }


  controller.reve=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT * FROM vehiculo',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('regsve',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  


  controller.reveh=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT * FROM vehiculo',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('regsveh',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  

  controller.conau=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT vehmod,vehcol,vehest,vehpre,datnom,datape,dattel FROM vehiculo v INNER JOIN datosp p on (v.datid=p.datid) where catid=1;',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('cona1',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  
  controller.conca=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT vehmod,vehcol,vehest,vehpre,datnom,datape,dattel FROM vehiculo v INNER JOIN datosp p on (v.datid=p.datid) where catid=2;',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('cona2',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  



  controller.concm=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT vehmod,vehcol,vehest,vehpre,datnom,datape,dattel FROM vehiculo v INNER JOIN datosp p on (v.datid=p.datid) where catid=3;',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('cona3',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  
  controller.confu=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT vehmod,vehcol,vehest,vehpre,datnom,datape,dattel FROM vehiculo v INNER JOIN datosp p on (v.datid=p.datid) where catid=4;',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('cona4',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  
  controller.conbu=(req,res,next)=>{
    /*if(req.session.login){*/
     cnn.query('SELECT vehmod,vehcol,vehest,vehpre,datnom,datape,dattel FROM vehiculo v INNER JOIN datosp p on (v.datid=p.datid) where catid=5;',(err,resbd)=>{
          if(err){
            next(new Error(err))  
            console.log("Error en la consulta")
          }
          else{
              console.log(resbd)
              res.render('cona5',{datos:resbd});
          }
      }) 
    
   /*}
   else{
       res.redirect('/')
   }*/
  
  }  


controller.filtro=(req,res,next)=>{
    const mm=req.body.maximo;
    const mn=req.body.minimo;
    const ca=req.body.categoria;

    cnn.query('SELECT * FROM vehiculo v INNER JOIN categoria c ON (v.catid=c.catid) WHERE vehpre>=? AND vehpre<=?  OR c.catid=?',[mn,mm,ca],(err,resbd)=>{
        if(err){
          next(new Error(err))  
          console.log("Error en la consulta")
        }
        else{
            //console.log(resbd)
            res.render('conpre',{datos:resbd});
        }
    }) 
}

  controller.actualizard=(req,res,next)=>{
    /*if(req.session.login){*/
 
    
     cnn.query('SELECT * FROM datosp WHERE usuid="'+[ddd]+'"',(err,resbd)=>{
         if(err){
           next(new Error(err))  
           console.log("Error en la consulta")
         }
         else{
             //console.log(resbd)
             res.render('datact',{datos:resbd});
         }
     }) 
   /*}
   else{
       res.redirect('/')
   }*/
  }

  controller.actualizarda=(req,res,next)=>{
    /*if(req.session.login){*/
 
    
     cnn.query('SELECT * FROM datosp WHERE usuid="'+[ddd]+'"',(err,resbd)=>{
         if(err){
           next(new Error(err))  
           console.log("Error en la consulta")
         }
         else{
             //console.log(resbd)
             res.render('datactu',{datos:resbd});
         }
     }) 
   /*}
   else{
       res.redirect('/')
   }*/
  }

 controller.insertar=async(req,res,next)=>{
    console.log(req.body) 
 const u=req.body.usuid;//Captura el dato del documento del cliente
 const r=req.body.rolid;//Captura el dato del nombre del cliente
 const us=req.body.usulog;//Captura el dato de la clave del cliente
 const c=req.body.usucon ;//Captura el dato del rol del cliente
 const ro=req.body.roltip;//Captura el dato del estado del cliente
 const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(r,u);
 cnn.query('INSERT INTO usuarios SET?',{usuid:u,rolid:r,usulog:us, usucon:password, roltip:ro},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('usuario')   
     
 }
     })
 }


 controller.insertarp=async(req,res,next)=>{
    console.log(req.body) 
 const da=req.body.datid;//Captura el dato del documento del cliente
 const du=req.body.usuid;//Captura el dato del nombre del cliente
 const dn=req.body.datnom;//Captura el dato de la clave del cliente
 const ap=req.body.datape;//Captura el dato del rol del cliente
 const dt=req.body.datipoid;//Captura el dato del estado del cliente
 const nu=req.body.datnumid;
 const te=req.body.dattel;
 const dc=req.body.datcorr;
 //const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(da,du);
 cnn.query('INSERT INTO datosp SET?',{datid:da,usuid:du,datnom:dn,datape:ap,datipoid:dt,datnumid:nu,dattel:te,datcorr:dc},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('datosp')   
     
 }
     })
 }



 controller.insertarv=async(req,res,next)=>{
    console.log(req.body) 
 const pl=req.body.vehplaca;//Captura el dato del documento del cliente
 const da=req.body.datid;//Captura el dato del nombre del cliente
 const ca=req.body.catid;//Captura el dato de la clave del cliente
 const mo=req.body.vehmod;//Captura el dato del rol del cliente
 const ma=req.body.vehmar;//Captura el dato del estado del cliente
 const es=req.body.vehest;
 const pr=req.body.vehpre;
 const co=req.body.vehcol;
 //const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(pl,da);
 cnn.query('INSERT INTO vehiculo SET?',{vehplaca:pl,datid:da,catid:ca,vehmod:mo,vehmar:ma,vehest:es,vehpre:pr,vehcol:co},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('regsve')   
     
 }
     })
 }

 controller.insertarve=async(req,res,next)=>{
    console.log(req.body) 
 const pl=req.body.vehplaca;//Captura el dato del documento del cliente
 const da=req.body.datid;//Captura el dato del nombre del cliente
 const ca=req.body.catid;//Captura el dato de la clave del cliente
 const mo=req.body.vehmod;//Captura el dato del rol del cliente
 const ma=req.body.vehmar;//Captura el dato del estado del cliente
 const es=req.body.vehest;
 const pr=req.body.vehpre;
 const co=req.body.vehcol;
 //const password=await bcryptjs.hash(c,8)//Permite que la contraseña sea encriptada,tambien del dato que se toma para la encriptacion
 
 console.log(pl,da);
 cnn.query('INSERT INTO vehiculo SET?',{vehplaca:pl,datid:da,catid:ca,vehmod:mo,vehmar:ma,vehest:es,vehpre:pr,vehcol:co},(err,resbd)=>{//Inserta los datos capturados en la base de datos que esta conectada a la aplicaion
 if(err){
     next(new Error (err))
 
 }
 else{
     console.log(resbd);
     res.redirect('regsveh')   
     
 }
     })
 } 

 controller.eliminar=async(req,res,next)=>{
    console.log("Boton eliminar")
    const rii=req.body.rr;
    console.log(rii)
    cnn.query('DELETE FROM usuarios WHERE rolid="'+rii+'"',async(err,respbb)=>{
        
    if(err){
        
      next(new Error(err));
    }
    else{
        console.log("Datos Eliminados")
        res.redirect('usuario')
    }
        
     })
}

controller.eliminarp=async(req,res,next)=>{
    console.log("Boton eliminar")
    const nnn=req.body.zz;
    console.log(nnn)
    cnn.query('DELETE FROM datosp WHERE usuid="'+nnn+'"',async(err,respbb)=>{
        
    if(err){
        
      next(new Error(err));
    }
    else{
        console.log("Datos Eliminados")
        res.redirect('datosp')
    }
        
     })
}





 





controller.login=async(req,res,next)=>{
 const usu=await req.body.usulog;
 const cla=await req.body.usucon;
 cnn.query('SELECT * FROM usuarios WHERE usulog=?',[usu],async(err,results)=>{
        if(err){
            next(new Error("Error de consulta login",err));
        }
        /*else if(results!=0  && await(bcryptjs.compare(cla,results[0].usucon)))*/
        else if(results!=0 && await(cla,results[0].usucon)){//Esto compara la clave que ingresa el usuario con la de la base de datos que ya esta encriptada
                console.log("Datos correctos");
                //res.redirect('/lusuarios')
                rol=results[0].roltip;//Captura el rol del arreglo result del usuario del cual se ingresan los datos y que ya esta registrado en la base
                uss=results[0].usulog;
                ddd=results[0].usuid;//captura el usuario del arreglo result del usuario del cual se ingresan los datos y que ya esta registrado en la base
                req.session.login=true;//se esta inicializando la variable de session
                req.session.uss=results[0].usulog;
                //req.session.ddd=results[0].DocCli;
                switch(rol){//Reconoce el rol registrado del usuario que ingreso al login
                    case 'Administrador':
                        res.redirect('menua');//Si en la base el usuario tiene registrado Cliente la pagina se redirecciona a la vista del cliente
                        /*if(req.session.login){
                         res.redirect('cliente');
                        }
                        else{
                            res.redirect('login');
                        }*/
                    break;    
                    case 'Comprador':
                      res.redirect('menub');//Si en la base el usuario tiene registrado Empleado la pagina se redirecciona a la vista del usuario
                    break;
                    case 'Vendedor':
                        res.redirect('regsve')
                    break; 
                }
        }
        else{
            console.log("Datos incorrectos");
            res.redirect('/');
        }
    })
}


controller.actualizar=async(req,res,next)=>{
    //const usx=req.body.uu;
    const rox=req.body.rr;
    const lox=req.body.ss;
    const cox=req.body.cc;
    const rtx=req.body.oo;
    const password=await bcryptjs.hash(cox,8)
    
    //console.log("Actualizar",doc,usu);
    cnn.query('UPDATE usuarios SET usulog="'+lox+'",usucon="'+password+'",roltip="'+rtx+'" WHERE rolid="'+rox+'"', async(err,respbb)=>{
      if(err){
          next(new Error(err));
      }
      else{
          console.log("Actualizado")
          res.redirect('usuario');
      }
    
    })
    
    }
    


    controller.actualip=async(req,res,next)=>{
        const dup=req.body.uu;
        const nop=req.body.nn;
        const app=req.body.pp;
        const tep=req.body.tt;
        const cop=req.body.cc;
        //const password=await bcryptjs.hash(cox,8)
        
        //console.log("Actualizar",doc,usu);
        cnn.query('UPDATE datosp SET datnom="'+nop+'",datape="'+app+'",dattel="'+tep+'",datcorr="'+cop+'"  WHERE usuid="'+dup+'"', async(err,respbb)=>{
          if(err){
              next(new Error(err));
          }
          else{
              console.log("Actualizado")
              res.redirect('datact');
          }
        
        })
        
        }    

        controller.actualizarp=async(req,res,next)=>{
            const dda=req.body.aa;
            const dua=req.body.uu;
            const noa=req.body.nn;
            const apa=req.body.pp;
            const tia=req.body.ii;
            const nia=req.body.mm;
            const tea=req.body.tt;
            const coa=req.body.cc;
            //const password=await bcryptjs.hash(cox,8)
            
            //console.log("Actualizar",doc,usu);
            cnn.query('UPDATE datosp SET datid="'+dda+'",datnom="'+noa+'",datape="'+apa+'",datipoid="'+tia+'",datnumid="'+nia+'",dattel="'+tea+'",datcorr="'+coa+'"  WHERE usuid="'+dua+'"', async(err,respbb)=>{
              if(err){
                  next(new Error(err));
              }
              else{
                  console.log("Actualizado")
                  res.redirect('datosp');
              }
            
            })
            
            }           


controller.cerrar=(req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    })
        
        
}
  


module.exports=controller;