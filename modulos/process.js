//const process = require("process");

process.on("beforeExit", () => {
    console.log("el proceso va a terminar");
});

process.on("exit", () => {
    console.log("Antonio, el proceso a terminado");
});

process.on("uncaughtException", (err, origen) => {
    console.error("Vaya se nos ha olvidado capturrar un error");
    console.error(err);

});

console.log("Vaya se nos ha olvidado capturrar un error");
