import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onLogin() {
    if(this.form.invalid) {
      alert('You must fill both inputs');
      return;
    }

    const { username, password } = this.form.getRawValue();
    const logged = this.authService.login(username, password);

    if(!logged) {
      alert('Wrong credentials!');
      
      return;
    }

    this.router.navigateByUrl('/')
  }
}
