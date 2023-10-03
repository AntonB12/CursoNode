const fs = require("fs");

function leer(ruta, cb){
    fs.readFile(ruta, (error, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err) {
        if (err){
            console.error("no he podido escribirlo", err);
        }
     else{
        console.log("Se ha escrito");
    }
});
   
}

function borrar(ruta, cb){
    fs.unlink(ruta, cb);
}


//escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo nuevo", console.log)
//leer(__dirname + "/archivo1.txt", console.log)
borrar(__dirname + "/archivo1.txt", console.log)