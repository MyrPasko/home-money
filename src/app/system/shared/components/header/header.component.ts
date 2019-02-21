import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pmr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date();
  user: User;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    console.log(window.localStorage.getItem('user'));
    console.log(JSON.parse(window.localStorage.getItem('user')));
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
