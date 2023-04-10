import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl !: "http://localhost:8070/api/users"

  constructor(private http:HttpClient) { }

  getUser() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8070/api/users",{responseType:'json'})
  }
}
