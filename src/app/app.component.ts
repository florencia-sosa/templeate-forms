import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-forms';

  public login: Login = {
    email: '',
    password: '',
  }
  public onSubmit() {
    console.log('el email es' + this.login.email)
    console.log('la contraseña es' + this.login.password)
    this.login.email = ''
    this.login.password = ''
  }
}

interface Login {
  email: string,
  password: string
}
