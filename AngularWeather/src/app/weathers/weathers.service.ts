import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Weather, WeatherCreate, WeatherUpdate } from './weather';

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

  constructor(private httpClient: HttpClient, private authService: AuthService) { }
     
  getAll(): Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(this.apiURL + '/')
      .pipe(
        catchError(this.errorHandler)
      )
  }
     
  create(weather:WeatherCreate): Observable<Weather> {
    console.log(weather)
    weather.Date = "2012-06-18T11:00:00"
    return this.httpClient.post<Weather>(this.apiURL + '/', weather)
      .pipe(
        catchError(this.errorHandler)
      )
  }  
     
  find(id: string | null): Observable<Weather> {
    return this.httpClient.get<Weather>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
     
  update(id:string | null, weather:WeatherUpdate): Observable<any> {
    let weatherUpdate: WeatherUpdate = {
      "ID": weather.ID,
      "Precipitation": weather.Precipitation,
      "Humidity": weather.Humidity,
      "Wind": weather.Wind,
      "Date": weather.Date,
      "CityID": weather.CityID,
      "UserID": weather.UserID,
      "Status": weather.Status,
      "UpdateAt": weather.UpdateAt,
      "CreateAt": weather.CreateAt,
      "DeleteAt": weather.DeleteAt
    }
    console.log(weatherUpdate)

    return this.httpClient.patch<any>(this.apiURL + '/' + id, weatherUpdate, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
     
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
    
    
  errorHandler(error:any) {
    let errorMessage = '';
    console.log("ERROR")
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
