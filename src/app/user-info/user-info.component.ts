import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user-service/user.service';
import { ProjectsService } from '../services/projects-service/projects.service';
import { AuthService } from '../services/auth-service/auth.service';


@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  constructor(
    public userService: UserService,
    public projectsService: ProjectsService,
    public authService: AuthService
   ) { }

  ngOnInit() {
    this.authService.getProfile((err, profile) => {
      this.userService.getUserInfo(this.authService.userProfile);
    });
    console.log('Initiated');
  }
}