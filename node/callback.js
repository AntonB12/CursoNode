function hola(nombre, micallback){
    setTimeout(function() {
        console.log("hola " + nombre);
        micallback(nombre);
    }, 1500);

}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log("adios " + nombre);
        otrocallback();
    }, 1000);
}

console.log("iniciando proceso");
hola("Antonio", function(nombre) {
   adios(nombre, function(){
    console.log("Terminando proceso");
    });
});

//hola("antonio ", function () {});
//adios("antonio  ", function(){});
