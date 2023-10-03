function otrafuncion(){
     serompe();
}

function serompe(){
    return 3 + z;
}

function serompeasincrona(cb){
    setTimeout(function() {
        try{
            return 3 + z;

        }catch(err){
            console.error("Error en mi funcion asincrona");
            cb(err.message);
        }
    });
}

try {
    //otrafuncion();
    serompeasincrona(function(){
       console.log("Hay error");
    });
} catch(err){
    console.error("Vaya vaya simonn hay un error");
    console.error(err.message);
    console.log("no pasa nada");
}

console.log("Esto de aqui es el finallll");
