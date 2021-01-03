import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cases } from './cases';
import { Statistic } from './statistic';
import { stringify } from 'querystring';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

const apiUrl = 'http://localhost:3000/api';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);

    };
  }

  getCases(): Observable<Cases[]> {
    return this.http.get<Cases[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      );
  }

  getStatistic(status: string): Observable<Statistic> {
    const url = `${apiUrl}/daily/${status}`;
    return this.http.get<Statistic>(url)
      .pipe(
        tap(_ => console.log(`fetched statistic status=${status}`),
          catchError(this.handleError<Statistic>(`getStatistic status= ${status}`)))
      )
  }
  deleteCases(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cases>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted case id=${id}`)),
        catchError(this.handleError<Cases>('delete cases'))
      )
  }
  updateCases(id: string, cases: Cases): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updated cases'))
    )
  }
  addCases(cases: Cases): Observable<Cases> {
    return this.http.post<Cases>(apiUrl, cases, httpOptions).pipe(
      tap((c: Cases) => console.log(`added case with id=${c._id}`)),
      catchError(this.handleError<Cases>('add Case'))
    );
  }
  getCasesById(id: string): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cases>(url).pipe(
      tap(_ => console.log(`fetched case id=${id}`)),
      catchError(this.handleError<Cases>('get case id'))
    )
  }

}
