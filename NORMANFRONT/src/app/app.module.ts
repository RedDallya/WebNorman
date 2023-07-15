import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { StaffComponent } from './components/staff/staff.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BotonesComponent } from './components/botones/botones.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    EventosComponent,
    QuienessomosComponent,
    StaffComponent,
    ContactoComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
