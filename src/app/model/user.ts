import { Optional } from '@angular/core';

export class User {
    id: number;
    login: string;
    password: string;
    constructor(
        @Optional()id: number,
        login: string,
        password: string
    ) {
        this.id = id;
        this.login = login;
        this.password = password;
    }

}
