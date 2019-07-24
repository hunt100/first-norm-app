import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /** Just a placeholder for future AuthService Bearer jwt*/
  getAuthorizationToken() {
    return 'some-auth-token';
  }
  constructor() { }
}
