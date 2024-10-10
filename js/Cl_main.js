import { Cl_fijo } from "./Cl_fijo.js";
import { Cl_contratado } from "./CL_contratado.js";

export class Cl_Main {

    constructor() {
        this.Cl_contratado = new Cl_contratado ()
        this.salida = document.getElementById("salida");
        this.main();
    
} 
main() {

    let fijo1 = new Cl_fijo("Carlos", 25, 100);
    let fijo2 = new Cl_fijo("Carolina", 40, 90);

    this.salida.innerHTML = `
    <p> Nombre del profesor fijo: ${fijo1.nombre} <br>
        Monto del bono: $${fijo1.bono} <br>
        sueldo: ${fijo1.sueldo} <br>
        Ingreso total del profesor ${fijo1.nombre}: $${fijo1.ingresoTotal()}</p>


     <p> Nombre del profesor contratado: ${fijo2.nombre} <br>
        Monto del bono: $${fijo2.bono} <br>
        sueldo: ${fijo2.sueldo} <br>
        Ingreso total del profesor ${fijo2.nombre}: $${fijo2.ingresoTotal()}</p></p>
    `
}
}