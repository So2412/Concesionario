$(document).ready(function(){

$('.btnact').on('click',function(){
   
   let btn= $('.btnact').index(this);
   //let ui=$('.usuid').eq(btn);
   let ri=$('.roid').eq(btn);
   let ul=$('.uslo').eq(btn);
   let uc=$('.usco').eq(btn);
   let rt=$('.roti').eq(btn);
  


   //let u=ui.val();
   let r=ri.val();
   let us=ul.val();
   let c=uc.val();
   let ro=rt.val();
   alert("datos"+r+us+c+ro)



$.ajax({
type:"POST",
url:'/actualizar',
data:{
    rr:r,ss:us,cc:c,oo:ro
}

});  
   
});



})



//Actualizar datos personales
$(document).ready(function(){

    $('.btnactu').on('click',function(){
       
       let btn= $('.btnactu').index(this);
       let did=$('.did').eq(btn);
       let uid=$('.uid').eq(btn);
       let nom=$('.nom').eq(btn);
       let ape=$('.ape').eq(btn);
       let tid=$('.tid').eq(btn);
       let nid=$('.nid').eq(btn);
       let tel=$('.tel').eq(btn);
       let cor=$('.cor').eq(btn);
     
    
    
       let da=did.val();
       let du=uid.val();
       let dn=nom.val();
       let ap=ape.val();
       let dt=tid.val();
       let nu=nid.val();
       let te=tel.val();
       let dc=cor.val();
      
       alert("datos"+da+du+dn+ap+dt+nu+te+dc)
    
    
    
    $.ajax({
    type:"POST",
    url:'/actualizarp',
    data:{
        aa:da,uu:du,nn:dn,pp:ap,ii:dt,mm:nu,tt:te,cc:dc
    }
    
    });  
       
    });
    
    
    
    })


//Actualizar datos de 1 persona
$(document).ready(function(){

    $('.act').on('click',function(){
       
       let btn= $('.act').index(this);
       let us=$('.us').eq(btn);
       let nom=$('.dno').eq(btn);
       let ape=$('.dap').eq(btn);
       let tel=$('.dte').eq(btn);
       let cor=$('.dco').eq(btn);
     
    
    
       let ddu=us.val();
       let ddn=nom.val();
       let dap=ape.val();
       let tte=tel.val();
       let dcc=cor.val();
      
       alert("datos"+ddu+ddn+dap+tte+dcc)
    
    
    
    $.ajax({
    type:"POST",
    url:'/actualizardp',
    data:{
        uu:ddu,nn:ddn,pp:dap,tt:tte,cc:dcc
    }
    
    });  
       
    });
    
    
    
    })


