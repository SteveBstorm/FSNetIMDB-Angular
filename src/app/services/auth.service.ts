import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';
import { Observable, Subject } from 'rxjs';

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
    private _client : HttpClient
  ) { }

  login(email : string, password : string){
    var user = new LoginInfo();
    user.email = email;
    user.password = password;
    this._client.post<User>(this.url+"/auth/auth",user).subscribe({
      next : (data : User) => { 
        console.log(data['token'])
        this.isConnected = true;
        this.currentUser = data;
        this.emitIsConnected()
       },
      error : error =>  {console.log(error); console.log("ca plante")}
      
    })
    
  }

  logout(){
    this.currentUser = null;
    this.emitIsConnected();
  }

}
export class LoginInfo {
  email : string;
  password : string;
}
