import { Component, OnInit } from '@angular/core';
import {UserApiService} from "./user-api.service";
import {User} from "../../model/user";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddUserComponent} from "./add-user/add-user.component";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserApiService, public dialog: MatDialog) { }

  users: User[];
  check: boolean = false;
  data: User;

  ngOnInit() {
    this.loadUser();
  }


  ngAfterViewInit(): void {
    this.loadUser();
  }

  loadUser():void{
    this.userService.allUsers().subscribe(value => {
      if(value.length>0){
        this.users = value;
        this.check = true;
      }
    })
  }

  openDialogEditUser(user: User){

    const dialogConfig = new MatDialogConfig();
    this.data = user;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.userService.updateUser(user)
      .subscribe(res=>{
        this.data = res;

        this.loadUser();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

  openDialogAddUser() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(res => {
        this.data = res;
        this.userService.addNewUser(this.data).subscribe(value => this.loadUser());


      }, error1 => {
        alert("Alert form openDialog")
      })
  }

  deleteUser(user:User) {
    this.userService.deleteUser(user.id).subscribe(value => this.loadUser() )
  }

  deactiveUser(user:User) {
    this.userService.deactivateUser(user.id).subscribe(value => this.loadUser() )
  }
}
