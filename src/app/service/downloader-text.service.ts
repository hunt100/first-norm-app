import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { add } from 'ngx-bootstrap/chronos/public_api';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Injectable()
export class DownloaderTextService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getTextFile(filename: string){
    return this.http.get(filename, {responseType: 'text'})
    .pipe(
      tap(
        data => this.log(filename, data),
        error => this.logError(filename, error)
      )
    );
  }

  private log(filename: string, data: string) {
    const message = `DownloaderService download "${filename} and got ${data}"`;
    this.messageService.add(message);
  }

  private logError(filename: string, error: any) {
    const message = `DownloaderService failed "${filename} and got ${error.message} error`;
    console.error(error);
    this.messageService.add(message);
  }
}
