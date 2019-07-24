import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from '../service/message.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor{
    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const started = Date.now();
        let ok: string;


        return next.handle(req).pipe(
            /** The RxJS tap operator captures whether the request succeeded or failed */
            tap(
                event => ok = event instanceof HttpResponse ? 'succeded' : '',
                error => ok = 'failed'
            ),
            /** The RxJS finalize operator is called when the response observable either errors or completes (which it must) */
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} ${req.urlWithParams} ${ok} in ${elapsed} ms.`;
                this.messageService.add(msg);
            })
        );


    }
}
