import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  dateUrl:string = 'http://localhost:3000/dates';
  constructor(private http: HttpClient) { }

  getAllDates():Observable<any[]> {
    return this.http.get<any[]>(`${this.dateUrl}`);
    }

  getDateByDate(date: string):Observable<any> {
    return this.http.get<any>(`${this.dateUrl}/?date=${date}`);
  }
}
