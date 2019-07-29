import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Country} from "../../../model/country";

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditCountryComponent>,
              @Inject(MAT_DIALOG_DATA) public country: Country) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: [this.country.name, Validators.required ],
      code: [this.country.code, Validators.required ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
