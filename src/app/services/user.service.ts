import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from '../models/User.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = "http://localhost:53448/api";

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  register(newUser : NewUser) {
    this._client.post<NewUser>(this.url+"/user/register", newUser).subscribe({
      next : () => this._router.navigate(['/movie']),
      error : (error) => console.log(error) 
    });
  }
}
