import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TrimNameInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        const body = req.body;
        if (!body || !body.name) {
            return next.handle(req);
        }

        const newBody = {...body, name: body.name.trim()};
        const newReq = req.clone({body: newBody});

        return next.handle(newReq);

        /** This is how to clear the body */
        const yourNewReq = req.clone({body: null});
    }
}
