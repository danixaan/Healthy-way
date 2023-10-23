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

   //======= CREAR food======
   addFod(fod:Food): Observable<any>{
    return this.http.post<Food>(`${this.URL}/food/`, fod, this.httpHeader)
    .pipe(catchError(this.handleError<Food>('Add Food')))
  }

 
  //=====borrar food======
  deleteFod(id: any): Observable<Food[]>{
    return this.http.delete<Food[]>(`${this.URL}/food/` + id).pipe(
      tap((_) => console.log(`Food deleted: ${id}`)),
      catchError(this.handleError<Food[]>(`Delete Food`))
    )
  }



  //=====ACTUALIZAR food======
  updateFod(id: any, fod: Food):Observable<any>{
    return this.http.put(`${this.URL}/food/`+ id, fod,
      this.httpHeader).pipe(
        tap((_) => console.log(`Food updated: ${id}`)),
        catchError(this.handleError<Food[]>('Update Food'))
      );
  }

  //=====GET food POR ID======
  getFodId(id: any):Observable<Food[]>{
    return this.http.get<Food[]>(`${this.URL}/food/` + id).pipe(
      tap((_) => console.log(`Food fetched: ${id}`)),
      catchError(this.handleError<Food[]>(`Get Food id=${id}`))
    );
  }
}
