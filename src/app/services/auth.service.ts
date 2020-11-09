import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private const url : string = "http://localhost:53448/api";

  currentUser :User;

  isConnected : boolean;

  constructor(
    private _client : HttpClient
  ) { }

  login(email : string, password : string){
    this._client.post<User>(this.url+"/auth/auth",[email = email, password = password]).subscribe({
      next : (data : User) => { 
        this.currentUser = data;
        this.isConnected = true;
       },
      error : error => console.log(error)
    })
  }
}
