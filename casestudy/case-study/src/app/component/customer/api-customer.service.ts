import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {ICustomer} from '../../module/customer/ICustomer';


@Injectable({
  providedIn: 'root'
})
export class ApiCustomerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private apiCustomerUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }


  customerList(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.apiCustomerUrl + '/customers')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  create(customer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.apiCustomerUrl + '/customers/', JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  addCustomer(customer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.apiCustomerUrl + '/customers/', JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getById(idCustomer): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.apiCustomerUrl + '/customers/' + idCustomer)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  // findById(idCustomer): Observable<ICustomer> {
  //   return this.httpClient.get<ICustomer>(this.apiCustomerUrl + '/customers/' + idCustomer)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     );
  // }

  update(idCustomer, customer): Observable<ICustomer> {
    return this.httpClient.put<ICustomer>(this.apiCustomerUrl + '/customers/' + idCustomer, JSON.stringify(customer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(idCustomer){
    return this.httpClient.delete<ICustomer>(this.apiCustomerUrl + '/customers/' + idCustomer, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  // getAll(): Observable<ICustomer[]> {
  //   return this.httpClient.get<ICustomer[]>(this.apiCustomerUrl + '/customers/')
  //     .pipe(
  //       catchError(this.errorHandler)
  //     )
  // }

  //

  //
  // findById(id): Observable<ICustomer> {
  //   return this.httpClient.get<ICustomer>(this.apiCustomerUrl + '/' + id)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     );
  // }
  //
  // updateCustomer(id, customer): Observable<ICustomer> {
  //   return this.httpClient.put<ICustomer>(this.apiCustomerUrl + '/' + id, JSON.stringify(customer), this.httpOptions)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     );
  // }
  //
  // deleteCustomer(id) {
  //   return this.httpClient.delete<ICustomer>(this.apiCustomerUrl + '/' + id, this.httpOptions)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     );
  // }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
