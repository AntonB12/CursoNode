function funcion1(){
    console.group("funcion 1");
    console.log("esto es de la funcion 1")
    console.log("esto tambien")

    funcion2();
    console.log("He vuelto a la 1");
    console.groupEnd("funcion 1");
}

function funcion2(){
    console.group("funcion 2");
    console.log("AShora estamos en la funcion 2");
    console.groupEnd("funcion 2");
}

console.log("Empezamos")
funcion1();