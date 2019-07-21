import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Branch} from "../../../model/branch";
import {Country} from "../../../model/country";
import {CountryApiService} from "../../country/country-api.service";

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  countries: Country[];
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditBranchComponent>,
              private countryService: CountryApiService,
              @Inject(MAT_DIALOG_DATA) public branch: Branch) {

    countryService.allCountries().subscribe(value => this.countries = value);
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: [this.branch.name, Validators.required ],
      address: [this.branch.address, Validators.required],
      city: [this.branch.city,Validators.required],
      zipCode: [this.branch.zipCode, Validators.required],
      country: [this.branch.country, Validators.required],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }


}
