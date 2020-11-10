import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url : string = "http://localhost:53448/api";

  constructor(
    private _client : HttpClient
  ) { }

  getByMovieId(Id : number) :Observable<Comment[]> {
    return this._client.get<Comment[]>(this.url+"/comment/"+Id)
  }

  addComment(c : Comment) {
    this._client.post(this.url+"/comment", c).subscribe( {
      next : () => console.log(),
      error : (error) => console.log(error)
    })
  }

  delete(id : number) : Observable<any> {
    return this._client.delete(this.url+"/comment/"+id)
  }
}
