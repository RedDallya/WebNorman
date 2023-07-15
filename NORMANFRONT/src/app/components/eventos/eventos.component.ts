import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  isMenuExpanded = false;

  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }
}
