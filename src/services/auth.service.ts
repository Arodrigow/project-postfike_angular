import { API_CONFIG } from './../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, { email, password }, this.httpOptions)
  }
}
