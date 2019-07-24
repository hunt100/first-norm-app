import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        const authtoken = this.auth.getAuthorizationToken();

        const authReq = req.clone({
            headers: req.headers.set('Authorization', authtoken)
        });
        //Shortcut for set-ing authorization in header
        const authReq2 = req.clone({
            setHeaders: {Authorization: authtoken}
        });

        return next.handle(req);
    }
}
