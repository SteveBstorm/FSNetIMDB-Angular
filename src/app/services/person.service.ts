import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CPerson } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url : string = "http://localhost:53448/api";
  constructor(
    private _client : HttpClient
  ) { }

  getOne(id : number) : Observable<CPerson>
    {
      let myHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ sessionStorage.getItem('token')
      })
      return this._client.get<CPerson>(this.url+"/person/"+id, {headers : myHeaders})
    }
  
}
