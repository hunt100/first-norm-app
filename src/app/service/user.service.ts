import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:3000/users';
  response: any;

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, httpOptions);
  }

  getUserById(id: number):Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`, httpOptions);
  }

  createUser(user: User):Observable<User> {
    return this.http.post<User>(this.baseUrl, user, httpOptions);
  }

  updateUser(user: User):Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user, httpOptions);
  }

  deleteUser(id: number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

}
