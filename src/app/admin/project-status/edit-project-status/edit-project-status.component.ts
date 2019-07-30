import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ProjectStatus} from "../../../model/project-status";

@Component({
  selector: 'app-edit-project-status',
  templateUrl: './edit-project-status.component.html',
  styleUrls: ['./edit-project-status.component.css']
})
export class EditProjectStatusComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditProjectStatusComponent>,
              @Inject(MAT_DIALOG_DATA) public projectStatus: ProjectStatus) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: [this.projectStatus.name, Validators.required ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
