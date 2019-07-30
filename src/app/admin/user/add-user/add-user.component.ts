import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {Role} from "../../../model/role";
import {RoleApiService} from "../../role/role-api.service";
import {UserApiService} from "../user-api.service";
import {UniqueUserValidator} from "../unique-user-validator.directive";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles: Role[];
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddUserComponent>,
              private roleService: RoleApiService,
              private userService : UserApiService) {

    roleService.allRoles().subscribe(value => this.roles = value);
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required,  UniqueUserValidator(this.userService)],
      active: ['true',Validators.required],
      role: [null, Validators.required],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
