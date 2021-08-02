/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  isUserLoggedIn = new BehaviorSubject(false);
  API_URL = environment.API_URL;
  //key=environment.Key;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
 constructor(private http: HttpClient,private _router: Router) { }

  getUserLoggedInInfo() {
      return this.isUserLoggedIn.value;
    }
    //  get user details
    getCurrentUserData() {
      return JSON.parse(localStorage.getItem('userData'));
    }

   tryLogin(formData) {
     return this.http.post<any>(this.API_URL + 'login', formData,this.httpOptions)
            .pipe(map(user => {
            if(user){
                this.userData.next(user);
                this.isUserLoggedIn.next(true);
             }
              else{
                 this.userData.next(null);
                this.isUserLoggedIn.next(false);
             }
 	             return user;
            }));
    }

  register(formData){
  //alert("formData="+JSON.stringify(formData));
      return this.http.post(this.API_URL + 'register', formData,this.httpOptions);
  }


 logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('userData');
        this.userData.next(null);
  }



}
