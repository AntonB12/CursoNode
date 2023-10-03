function otrafuncion(){
     serompe();
}

function serompe(){
    return 3 + z;
}

try {
    otrafuncion();
} catch(err){
    console.error("Vaya vaya simonn hay un error");
    console.error(err.message);
    console.log("no pasa nada");
}

console.log("Esto de aqui es el finallll");
