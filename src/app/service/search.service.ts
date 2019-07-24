import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NpmPackageInfo } from '../model/npm-package-info';

export const searchUrl = 'https://npmsearch.com/query';

const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};

function createHttpOptions(packageName: string, refresh = false) {
  const params = new HttpParams({fromObject: {q: packageName}});
  const headerMap = refresh ? {'x-refresh' : 'true'} : {};
  const headers = new HttpHeaders(headerMap);
  return {headers , params};
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor( private http: HttpClient) {}

  search(packageName: string, refresh = false):Observable<NpmPackageInfo[]> {
    if (!packageName.trim()) {
      return of([]);
    }

    const options = createHttpOptions(packageName, refresh);
    
    return this.http.get(searchUrl, options).pipe(
      map((data: any) => {
        return data.results.map((entry =>  ({
            name: entry.name[0],
            version: entry.version[0],
            description: entry.description[0]
          }))
        )
      })
    )

  }
}
