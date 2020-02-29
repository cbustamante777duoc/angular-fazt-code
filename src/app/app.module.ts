import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modulo dataBind
import { FormsModule } from '@angular/forms';
// importar para uso de servicios
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWord } from './primerComponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { EventosComponent } from './eventos/eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';

// importar servicios
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HelloWord,
    HolaMundoComponent,
    UserComponent,
    EventosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
