import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {
  url:string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
  }

   getAllUsers(since: number):Observable<any[]> {
     console.log(`${this.url}?since=${since}`);
     return this.http.get<any[]>(`${this.url}?since=${since}`);
   }
}
