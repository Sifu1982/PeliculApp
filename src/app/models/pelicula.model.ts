import { Persona } from "./persona.model";

export class Pelicula {

    id: number;
    titulo: string;
    fechaDeEstreno: Date;
    recaudacion: number;
    direccion: Persona;
    genero: string;
    productora: string;
    castPrincipal: Persona[];

    constructor(pId: number = 1, pTitulo: string = '', pFechaDeEstreno: Date = new Date, pRecaudacion: number = 0, pDireccion: Persona = new Persona(), pGenero: string = '', pProductora: string = '', pCastPrincipal: Persona[] = [new Persona()]) {
        this.id = pId;
        this.titulo = pTitulo;
        this.fechaDeEstreno = pFechaDeEstreno;
        this.recaudacion = pRecaudacion;
        this.direccion = pDireccion;
        this.genero = pGenero;
        this.productora = pProductora;
        this.castPrincipal = pCastPrincipal;
    }
}