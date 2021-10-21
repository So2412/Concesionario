$(document).ready(function(){

    $('.btneli').on('click',function(){
       
       let btn= $('.btneli').index(this);
       alert(btn)
       let rri=$('.roid').eq(btn);
      
       
       console.log(rri)
    
    
       let r=rri.val();
    
       alert("Se eliminaran los datos"+r)
    
    
    
    $.ajax({
    type:"POST",
    url:'/eliminar',
    data:{
        rr:r
    }
    
    });  
       
    });
    
    
    
    })


//eliminar datos personales
$(document).ready(function(){

    $('.btnelim').on('click',function(){
       
       let btn= $('.btnelim').index(this);
       alert(btn)
       let uui=$('.uid').eq(btn);
      
       
       console.log(uui)
    
    
       let t=uui.val();
    
       alert("Se eliminaran los datos"+t)
    
    
    
    $.ajax({
    type:"POST",
    url:'/eliminarp',
    data:{
        zz:t
    }
    
    });  
       
    });
    
    
    
    })    
