import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { MessageService } from './message.service';
import { map, tap, last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  upload(file: File) {
    if(!file) {
      return;
    }

    // COULD HAVE WRITTEN:
    // return this.http.post('/upload/file', file, {
    //   reportProgress: true,
    //   observe: 'events'
    // }).pipe(

    // Create the request object that POSTs the file to an upload endpoint.
    // The `reportProgress` option tells HttpClient to listen and return
    // XHR progress events.
    const req = new HttpRequest('POST', 'upload/file', file, {
      reportProgress: true
    });

    // The `HttpClient.request` API produces a raw event stream
    // which includes start (sent), progress, and response events.
    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap(message => this.showProgress(message)),
      last() //return last completed message to caller
      //catchError(this.handleError(file))
    )
  }

  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch(event.type) {
      case HttpEventType.Sent: 
        return `Uploading file ${file.name} of size ${file.size}`;
      
      case HttpEventType.UploadProgress:
        //Compute and show %
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% done`;

      case HttpEventType.Response:
          return `File "${file.name}" was completely uploaded!`;

      default:
          return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  private showProgress(message: string) {
    this.messageService.add(message);
  }
}
