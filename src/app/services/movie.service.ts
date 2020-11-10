import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = "http://localhost:53448/api";


  constructor(
    private _client : HttpClient
    ) { }

  getAll() : Observable<Movie[]> {
    return this._client.get<Movie[]>(this.url+"/movie")
  }

  getOne(id : number) : Observable<Movie> {
   let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ sessionStorage.getItem('token')
    })
    return this._client.get<Movie>(this.url+"/movie/"+id, {headers : myHeaders})

  }
}
