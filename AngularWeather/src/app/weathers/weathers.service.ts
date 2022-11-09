import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {

  private apiURL = "https://localhost:44355/api/v1/weathers";
     
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(): Observable<Weather[]> {

    return this.httpClient.get<Weather[]>(this.apiURL + '/').pipe(
      catchError(this.errorHandler)
    )
  }
     
  create(weather:Weather): Observable<Weather> {

    return this.httpClient.post<Weather>(this.apiURL + '/', JSON.stringify(weather), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }  
     
  find(id: string | null): Observable<Weather> {
    return this.httpClient.get<Weather>(this.apiURL + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
     
  update(id:string | null, weather:Weather): Observable<Weather> {

    return this.httpClient.put<Weather>(this.apiURL + '/' + id, JSON.stringify(weather), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
