import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl: string = 'http://localhost:3000/items';
  response: any;

  constructor(private http: HttpClient) { 
  }

  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);    
  }

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.baseUrl + '/' + id);
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item, httpOptions);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.baseUrl + '/' + item.id, item, httpOptions);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id, httpOptions);
  }

  /*
  httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token');
  */

  searchItem(term: string): Observable<Item[]> {
    term = term.trim();
    const options = term ? {params: new HttpParams().set('itemName', term)} : {};
    console.warn(this.http.get<Item[]>(`${this.baseUrl}/`, options));
    return this.http.get<Item[]>(`${this.baseUrl}/`, options);
  }

}
