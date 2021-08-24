import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms';
  constructor(private http:HttpClient) { }

  //os observables serão usados atraves de subscribes que fazem os retornos
  getRoom(id:number): Observable<any>{
      return this.http.get('http://localhost:8082/api/v1/rooms/'+id);
  }

  createRoom(room:Object):Observable<Object>{
    return this.http.post('http://localhost:8082/api/v1/rooms',room);
}

 updateRoom(id:number,value: any):Observable<Object>{
  return this.http.put('http://localhost:8082/api/v1/rooms/'+id,value);
 }

 deleteRoom(id:number):Observable<any>{
  return this.http.delete('http://localhost:8082/api/v1/rooms/'+id,{responseType:'text'});
}

getRoomList():Observable<any>{
  return this.http.get('http://localhost:8082/api/v1/rooms');
}
}
