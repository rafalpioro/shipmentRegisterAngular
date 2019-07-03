import { Component, OnInit } from '@angular/core';
import {UserApiService} from "./user-api.service";
import {User} from "../../model/user";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  curUser: User;


  constructor(private userService: UserApiService) { }

  ngOnInit() {
    this.show();
    this.currentUser();
  }

  show() {
    this.userService.allUsers().subscribe(value => this.users = value);
  }

  currentUser() {
    this.userService.currentUser(localStorage.getItem("CurrentUser")).subscribe(value => this.curUser = value);
  }

}
