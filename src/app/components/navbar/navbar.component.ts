import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /* Datos del usario */
  public user$: Observable<firebase.User> = this.auth.authSvc.user;
  /* Formulario de registro y ingreso */
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  /* Aux para cerrar modal */
  @ViewChild('closebuttonlogin') closebuttonlogin;
  @ViewChild('closebuttonregister') closebuttonregister;
  /* Constructor */
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  async signIn() {
    const { email, password } = this.userForm.value;
    await this.auth.signIn(email, password);
    if(!this.auth.err){
      this.closebuttonlogin.nativeElement.click();
      this.userForm.reset;

    }
  }

  async signUp() {
    const {email,password} = this.userForm.value;
    await this.auth.signUp(email,password);
    if(!this.auth.err){
      this.closebuttonregister.nativeElement.click();
      this.userForm.reset();
    }
  }

  async signOut() {
    await this.auth.signOut();
  }

}
