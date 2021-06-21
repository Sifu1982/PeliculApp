export class Persona {

    nombre: string;
    primerApellido: string;

    constructor(pNombre: string = '', pPrimerApellido: string = '') {
        this.nombre = pNombre;
        this.primerApellido = pPrimerApellido;
    }
}