import {Component,  OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";

import {CountryApiService} from "../country-api.service";
import {UniqueCountryValidator} from "../unique-country-validator.directive";

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddCountryComponent>,
              private countryService: CountryApiService) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required, UniqueCountryValidator(this.countryService) ],
      code: ['', Validators.required ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
