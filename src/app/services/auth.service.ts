import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = "http://localhost:53448/api";

  currentUser : User;

  isConnected : boolean = false;

  isConnectedSubject : Subject<User> = new Subject<User>();

  

  emitIsConnected() {
    this.isConnectedSubject.next(this.currentUser)
  }

  constructor(
    private _client : HttpClient,
    private _route : Router
  ) { }

  login(email : string, password : string){
    var user = new LoginInfo();
    user.email = email;
    user.password = password;
    this._client.post<User>(this.url+"/auth/auth",user).subscribe({
      next : (data : User) => { 
        this.currentUser = data;
        sessionStorage.setItem("token", this.currentUser.token)
        this.emitIsConnected()
       },
      error : error =>  {console.log(error); console.log("ca plante")}
      
    })
    
  }

  logout(){
    this.currentUser = null;
    sessionStorage.setItem('token', null);
    sessionStorage.setItem('token', '');
    this.emitIsConnected();
    this._route.navigate(['/home'])
  }

}
export class LoginInfo {
  email : string;
  password : string;
}
