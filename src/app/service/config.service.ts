import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  apiUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
  configUrl: string = 'http://localhost:3000/config';
  constructor(private http: HttpClient) { 
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getConfigV2() {
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse():Observable<HttpResponse<Config>> {
    return this.http.get<Config>(this.configUrl, {observe: 'response'});
  }

  getConfigV3() {
    return this.http.get<Config>(this.configUrl)
    .pipe(
      retry(3),   //retry a failed request 3 times
      catchError(this.handleError)  //then handle the error
    );
  }

  makeIntentionalError() {
    return this.http.get('http://localhost:3000/fakeConfig')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error:  HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occured.
      console.error('An error occured' + error.error.message);
    }
    else {
      // Backend return an uncessfull response code.
      console.error(`Backend return code ${error.status}, body was: ${error.error}`);
    }
    //Return an observable
    return throwError('Something bad happened. please, try again later'); 
  }
}
