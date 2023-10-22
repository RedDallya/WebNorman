import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiesta',
  templateUrl: './fiesta.component.html',
  styleUrls: ['./fiesta.component.css']
})
export class FiestaComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Busca el modal en el DOM y muestra automáticamente
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    }
  }
  closeModal() {
    // Cierra el modal incluso si la propiedad 'display' es 'block'
    const modalElement = document.getElementById('myModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
    }
  }
 
}