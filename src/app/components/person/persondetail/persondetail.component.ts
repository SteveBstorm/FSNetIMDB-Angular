import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CPerson } from 'src/app/models/movie.model';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.scss']
})
export class PersondetailComponent implements OnInit {

  currentPerson : CPerson

  constructor(
    private _service : PersonService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._route.snapshot.params['id']
    this._service.getOne(id).subscribe((data : CPerson) => this.currentPerson = data)
  }

}
