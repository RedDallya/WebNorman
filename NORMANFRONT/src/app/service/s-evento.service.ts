import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../model/evento';

@Injectable({
  providedIn: 'root'
})
export class SEventoService {
  private expURL = 'http://localhost:8080/evento/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Evento[]> {
    return this.httpClient.get<Evento[]>(this.expURL + 'listaEventos');
  }

  public saveEvento(evento: Evento): Observable<Evento> {
    return this.httpClient.post<Evento>(this.expURL + 'saveEvento', evento);
  }

  public guardarEventosSeleccionados(eventoIds: number[]): Observable<any> {
    // Aquí enviamos la lista de IDs de eventos seleccionados al backend
    // Asegúrate de que la ruta del backend coincida con '/guardarEventosSeleccionados'
    return this.httpClient.post<any>(this.expURL + 'guardarEventosSeleccionados', eventoIds);
  }
  
}
