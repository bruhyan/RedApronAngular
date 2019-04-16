import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public sessionService : SessionService, private router : Router) { }

  ngOnInit() {
  }

  userLogout() {
    this.sessionService.setIsLogin(false);
    this.sessionService.setCurrentUser(null);
    this.router.navigate(["/home"]);
  }

}
