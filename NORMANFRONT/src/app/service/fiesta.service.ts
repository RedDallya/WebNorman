import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fiesta } from '../model/Fiesta';

@Injectable({
  providedIn: 'root'
})
export class FiestaService {
rutaGlobal = 'http://localhost:8080/fiesta/'
  constructor(private http:HttpClient) { }

  //Crear
crearFiesta(fiesta: Fiesta){
  return this.http.post<Fiesta>(this.rutaGlobal + 'nuevo', fiesta,)
  observe: 'response'
}

  //Obtener
getFiestas(){
  return this.http.get<Fiesta[]>(this.rutaGlobal + 'mostrar')
}

  //Actualizar
actualizarFiesta(fiesta: Fiesta){
  return this.http.post<Fiesta>(this.rutaGlobal + 'update' , fiesta, {
    observe: 'response'
  })
}

  //Borrar
  eliminarFiesta(numDocumento: number){
    this.http.post<Boolean>(this.rutaGlobal + numDocumento, {
      observe: 'response'
    }) 
  }
}
