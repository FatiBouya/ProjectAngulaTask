import { Injectable } from '@angular/core';
import{Task}from './task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { url, urlCreate, urlGet, urlRemove } from './urls';

@Injectable({  /////Nouveau
  providedIn: 'root'
})
export class TaskService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  urlUp: any;

  constructor(private http: HttpClient) { }
  //////////////////////////////////////////////
  public getBackingData():Observable<Task[]>{
  return this.http.post<Task[]>(url ,'');//.//pipe(tap(tasks=>console.log('tasks',tasks)),
  //catchError(this.handleError)
  
    //return this.http.get(url);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  ////////////////////////////////////////////////////////////
  public create(task: Task): Observable<Task> {
    return this.http.post<Task>(urlCreate , task, this.httpOptions);
  }
  public removeTask(ID: number): Observable<any> {
    return this.http.post<Task>(urlRemove,ID,);
  }
  /*public removeTask(ID: number): Observable<any> {
    return this.http.post<Task>(`${urlRemove}/${ID}`, { responseType: 'text' });
  }*/

 public update( task:Task): Observable<Task> {
    return this.http.post<Task>(`${this.urlUp}` , task, this.httpOptions);
    }
  public  find(ID: number): Observable<Task> {
    
      return this.http.post<Task>(urlGet ,ID);
    }
  /*public getTasks():Task[]{
    
    return [
      { ID: 11, name: 'Dr Nice',startingDtae:new Date(10,10,2020),endingDtae:new Date (20,12,2022),starting:true,done:false },
      { ID: 12, name: 'Narco',startingDtae:new Date(10,10,2020),endingDtae:new Date (20,12,2022),starting:true,done:false },
      { ID: 13, name: 'Bombasto',startingDtae:new Date(10,10,2020),endingDtae:new Date (20,12,2022),starting:true,done:false },
    ];
   // return { tasks };
  }


  
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.ID)) + 1 : 11;
  }*/
}
  

