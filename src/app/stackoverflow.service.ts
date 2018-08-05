import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {

  private badgesURL = 'https://api.stackexchange.com//2.2/users/7103765?order=desc&sort=reputation&site=stackoverflow';

  constructor(private http: HttpClient) { }

  // getBadges (): Observable<any[]> {
  //   return this.http.get<any[]>(this.badgesURL)
  // }

  getBadges (): Observable<any[]> {
    return this.http.get<any[]>(this.badgesURL)
      .pipe(
        // tap(heroes => console.log(`herores`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
  }

}
