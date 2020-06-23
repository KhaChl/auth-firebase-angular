import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Firebase */
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuth} from '@angular/fire/auth';
import { environment } from '../environments/environment.prod';
/* Formulario reactivo */
import { ReactiveFormsModule } from '@angular/forms';
/* Componentes */
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
