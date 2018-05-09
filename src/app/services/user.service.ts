import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from '../models/users.model';
import { Login } from '../models/login.model';
import { InfoUser } from '../models/infouser.model';
import { Sendmail } from '../models/sendmail.model';
import 'rxjs/add/operator/map';
// import { environment } from '../enviroments/envirotment';

@Injectable()
export class UserCreate {
    users: Array<Users> =[];
    mail: Array<Sendmail> =[];
    constructor (private _http: Http){

    }

    // /Emails/sendEmail
    getUser(): Observable<Array<Users>> {
        const url = 'http://192.168.43.190:3000/api/users';
        return this. _http.get(url).map((response) => {
            return response.json();
        });
    }
    sendEmail(): Observable<Array<Sendmail>> {
        const url = 'http://192.168.43.190:3000/Emails/sendEmail';
        return this. _http.get(url).map((response) => {
            return response.json();
        });
    }


    postUser(newUser): Observable<Array<Users>> {
        console.log(newUser);
        const body = JSON.stringify(newUser);
        const url = 'http://192.168.43.190:3000/api/users';
        return this. _http.post(url,newUser).map((response) => {
            return response.json();
        });
    }

    loginUser(dataLogin): Observable<any> {
        console.log(dataLogin);
        const body = JSON.stringify(dataLogin);
        const url = 'http://192.168.43.190:3000/api/users/login';
        return this. _http.post(url,dataLogin).map((response) => {
            return response.json();
        });
    }
    infoUser(id): Observable<any> {
        const url = `http://192.168.43.190:3000/api/users/${id}`;
        return this. _http.get(url).map((response) => {
            return response.json();
        });
    }

}