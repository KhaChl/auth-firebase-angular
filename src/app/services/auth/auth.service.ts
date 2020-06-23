import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* aux errores */
  err: string;
  constructor(public authSvc: AngularFireAuth) { }

  async signIn(email: string, password: string) {
    try {
      const result = await this.authSvc.signInWithEmailAndPassword(email,password);
      this.err = '';
      return result;
    } catch (error) {
      var errorCode = error.code;
      if (errorCode == 'auth/user-not-found') {
        this.err = 'Usuario no existe.';
      } else if (errorCode == 'auth/wrong-password') {
        this.err = 'Contraseña incorrecta.';
      } else if (errorCode == 'auth/invalid-email') {
        this.err = 'La dirección de correo electrónico es invalida.';
      }
    }
  }

  async signUp(email: string, password: string) {
    try {
      const result = await this.authSvc.createUserWithEmailAndPassword(email,password);
      this.err = '';
      return result;
    } catch (error) {
      var errorCode = error.code;
      if (errorCode == 'auth/weak-password') {
        this.err = 'La contraseña debe tener al menos 6 caracteres.';
      } else if (errorCode == 'auth/email-already-in-use') {
        this.err = 'La dirección de correo electrónico ya está en uso por otra cuenta.';
      } else if (errorCode == 'auth/invalid-email') {
        this.err = 'La dirección de correo electrónico es invalida.';
      }
    }
  }

  async signOut() {
    try {
      await this.authSvc.signOut();
    } catch (error) {
      this.err = error.code;
    }
  }

}
