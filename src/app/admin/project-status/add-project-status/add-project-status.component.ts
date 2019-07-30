import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {ProjectStatusApiService} from "../project-status-api.service";
import {UniqueProjectStatusValidator} from "../unique-project-status-validator.directive";

@Component({
  selector: 'app-add-project-status',
  templateUrl: './add-project-status.component.html',
  styleUrls: ['./add-project-status.component.css']
})
export class AddProjectStatusComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddProjectStatusComponent>,
              private projectStatusService : ProjectStatusApiService) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required, UniqueProjectStatusValidator(this.projectStatusService) ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
