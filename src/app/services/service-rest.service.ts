import { Injectable, inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Food } from '../clasas/food';
import { Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  http = inject(HttpClient);

  URL: string = 'http://localhost:3300';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };


  //funcion para manejar errores
 private handleError<T>(operation = 'operation', result?: T){
  return (error: any): Observable<T> => {
    console.log(error);
    console.log(`${operation} failed: ${error.message}`);
    return of (result as T);
    };
  }

    //-----------get food------------//
  getFoodList(): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.URL}/food/`).pipe(
      tap((Food)=> console.log('food obtenidos')),
      catchError(this.handleError<Food[]>('Get Food',[]))
    );
  }


 
}
