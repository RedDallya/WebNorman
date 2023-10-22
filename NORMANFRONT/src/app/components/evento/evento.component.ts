import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/model/evento';
import { SEventoService } from 'src/app/service/s-evento.service';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  eventos: Evento[] = [];
  nuevoEvento: Evento = new Evento();
  eventosSeleccionados: Evento[] = [];
  isLogged: boolean = false; // Propiedad para controlar la visibilidad del contenido protegido

  constructor(private SEventoService: SEventoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.listaEventos();
    // Suscribe al estado de autenticación del servicio AuthService
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }
  listaEventos(): void {
    this.SEventoService.lista().subscribe(data => {
      this.eventos = data;
    });
  }

  saveEvento(): void {
    this.SEventoService.saveEvento(this.nuevoEvento).subscribe(() => {
      this.nuevoEvento = new Evento();
      this.listaEventos();
    });
  }

  toggleEvento(evento: Evento): void {
    if (this.eventosSeleccionados.includes(evento)) {
      this.eventosSeleccionados = this.eventosSeleccionados.filter(e => e !== evento);
    } else {
      this.eventosSeleccionados.push(evento);
    }
  }

  guardarEventosSeleccionados(): void {
    // Mapear los eventos seleccionados a un arreglo de IDs
    const eventoIds: number[] = this.eventosSeleccionados.map(evento => evento.id || 0);

    // Filtrar IDs no válidos (0)
    const idsValidos = eventoIds.filter(id => id !== 0);

    // Llamar al servicio para guardar los eventos seleccionados
    this.SEventoService.guardarEventosSeleccionados(idsValidos).subscribe(response => {
      // Manejar la respuesta del backend aquí si es necesario
    });
  }
  
}
