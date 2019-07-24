import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        // clone request and replace 'http://' with 'https://' at the same time
        const secureUrl = req.clone({
            url: req.url.replace('http://', 'https://')
        });

        // send the cloned, "secure" request to the next handler.
        return next.handle(secureUrl);  
    }
}
