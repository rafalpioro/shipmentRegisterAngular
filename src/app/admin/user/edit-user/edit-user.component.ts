import {Component, Inject, OnInit} from '@angular/core';
import {CarrierType} from "../../../model/carrier-type";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CarrierTypeApiService} from "../../carrier-type/carrier-type-api.service";
import {Carrier} from "../../../model/carrier";
import {Role} from "../../../model/role";
import {RoleApiService} from "../../role/role-api.service";
import {User} from "../../../model/user";
import {UniqueUserValidator} from "../unique-user-validator.directive";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  roles: Role[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditUserComponent>,
              private roleService: RoleApiService,
              @Inject(MAT_DIALOG_DATA) public user: User) {

    roleService.allRoles().subscribe(value => this.roles = value);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      name: [this.user.name, Validators.required ],
      email: [this.user.email, Validators.required  ],
      active: [this.user.active,Validators.required],
      role: [this.user.role, Validators.required],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
