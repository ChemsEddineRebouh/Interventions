import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ITypeProbleme } from './ITypeProbleme';

@Injectable({
  providedIn: 'root'
})
export class TypeproblemeService {

  private baseUrl = 'api/typesprobleme';

  constructor(private http: HttpClient) { }

  obtenirTypesProbleme(): Observable<ITypeProbleme[]> {
    return this.http.get<ITypeProbleme[]>(this.baseUrl).pipe(
        tap(data => console.log('obtenirTypesProbleme: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = 'An error occurred: ${err.error.message}';
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}