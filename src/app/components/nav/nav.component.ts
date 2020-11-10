import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public items : NbMenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { link : '/home', title : "Home", icon : 'home'},
      { link : '/about', title : "About", icon : 'alert-triangle' },
      { link : '/movie', title : "Liste de film"}
    ]
  }

}
