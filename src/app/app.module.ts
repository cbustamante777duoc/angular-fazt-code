import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modulo dataBind
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWord } from './primerComponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { EventosComponent } from './eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWord,
    HolaMundoComponent,
    UserComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
