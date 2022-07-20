import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-forms';
  public date = false

  public login: Login = {
    email: '',
    password: '',
    repassword:''
  }
  public onSubmit() {
    console.log('el email es' + this.login.email)
    console.log('la contraseña es' + this.login.password)
    this.date = true
  }
}

interface Login {
  email: string,
  password: string,
  repassword: string
}
