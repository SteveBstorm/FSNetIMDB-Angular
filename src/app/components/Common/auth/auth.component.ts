import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isConnectedSub : Subscription;
  currentUser : User;

  constructor(
    private _authService :AuthService
  ) { }

  ngOnInit(): void {
    this._authService.logout();
    this.isConnectedSub = this._authService.isConnectedSubject.subscribe(
      () => {
              this.currentUser = this._authService.currentUser 
            }
    )
  }

  logout(){
    this._authService.logout()
  }

}
