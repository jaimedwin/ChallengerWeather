import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin, UserResponse } from './user';

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
    }),
    observe: "response" as 'body'
  }
  
  constructor(private httpCLient : HttpClient) { }

  login(user: UserLogin): Observable<UserResponse> {
    return this.httpCLient.post<UserResponse>(this.api + 'login', user, this.httpOptions)
  }
}
