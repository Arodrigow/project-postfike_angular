import { CredentialsDto } from './../models/credentials.dto';
import { API_CONFIG } from './../config/api.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import * as moment from 'moment';


@Injectable()
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto) {
    return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, credentials, this.httpOptions)
      .subscribe(response => {
        this.setSession(response);
        return true;
      }, error => {})
  }

  private setSession(authResult: any) {
    const expiresIn = moment().add(authResult.expiresIn, 'seconds');

    localStorage.setItem('id_token', authResult.access_token)
    localStorage.setItem("expires_at", JSON.stringify(expiresIn.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration(): moment.MomentInput {
    const expiration = localStorage.getItem("expires_at") as string;
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


}
