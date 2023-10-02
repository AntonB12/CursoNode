function hola(nombre, micallback){
    setTimeout(function() {
        console.log("hola " + nombre);
        micallback(nombre);
    }, 1500);

}

function hablar(callbackhablar){
    setTimeout(function(){
        console.log("Hola ese que paso por donde andas...");
        callbackhablar();
    }, 1000);
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log("adios " + nombre);
        otrocallback();
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if(veces >= 0){
    hablar(function(){
        conversacion(nombre, --veces, callback);
        });
   }else {
        adios(nombre, callback);
   }
}
//..

console.log("iniciando proceso");
hola("Antonio", function(nombre){
    conversacion(nombre, 4, function(){;
        console.log("Proceso Terminado");
    });    
});

//      hablar(function(){
//          hablar(function(){
//              hablar(function(){
//                  adios(nombre, function(){
//                      console.log("Terminando proceso");
//                  });
//          });        
//          });
//    });

  
//});