import { CredentialsDto } from './../../models/credentials.dto';
import { AuthService } from './../../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    const validCredentials: CredentialsDto = this.loginForm.value
    let validated;
    if (validCredentials.email && validCredentials.password) {
      validated = this.authService.login(validCredentials)
    }
    if (validated) {
      this.router.navigate(['/'])
    }

  }
}
