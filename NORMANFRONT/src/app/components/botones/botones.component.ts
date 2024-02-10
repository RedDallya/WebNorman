import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  // Propiedad para controlar la visibilidad del contenido protegido
  isLogged: boolean = false;
  nombreUsuario!: string;

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    // Suscribe al estado de autenticación del servicio AuthService
    this.AuthService.isLogged$.subscribe((isLogged) => {
      this.isLogged = isLogged;

      
    });
  }
}
