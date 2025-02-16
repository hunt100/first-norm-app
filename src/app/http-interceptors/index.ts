import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './noop-interceptor';
import { EnsureHttpsInterceptor } from './ensure-https-interceptor';
import { TrimNameInterceptor } from './trim-name-interceptor';
import { AuthInterceptor } from './auth-interceptor';
import { LoggingInterceptor } from './logging-interceptor';
import { UploadInterceptor } from './upload-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
    //{provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true}, /** No httpS support, need to add hotel https://github.com/typicode/hotel */
    {provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: UploadInterceptor, multi: true}
];