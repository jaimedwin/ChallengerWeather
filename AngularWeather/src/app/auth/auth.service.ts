import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, UserRegister, UserResponse } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public ID!: number;
  public Username!: string;
  public Token!: string;

  private api = "https://localhost:44355/api/v1/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  router: any;
  
  constructor(private httpCLient : HttpClient) { }

  login(userLogin: UserLogin): Observable<UserResponse> {
    return this.httpCLient.post<UserResponse>(this.api + 'login', userLogin, this.httpOptions)
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  logout() {
    let removeToken = localStorage.removeItem('access_token')
    return removeToken == null
    //if (removeToken == null) { this.router.navigateByUrl('login'); }
  }

  register(userRegister: UserRegister): Observable<UserLogin> {
    return this.httpCLient.post<UserLogin>(this.api + 'users', userRegister, this.httpOptions)
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token')
    return authToken == null ? false : true
  }
}
