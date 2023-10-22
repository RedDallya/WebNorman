export class Evento {
    id?: number;
    descripcion: string;
    seleccionado: boolean; // Agregamos la propiedad seleccionado

    constructor(descripcion: string = "", seleccionado: boolean = false) {
        this.descripcion = descripcion;
        this.seleccionado = seleccionado;
    }
}
