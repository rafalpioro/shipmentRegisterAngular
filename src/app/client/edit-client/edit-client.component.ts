import {Component, Inject, OnInit} from '@angular/core';
import {Country} from "../../model/country";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CountryApiService} from "../../admin/country/country-api.service";
import {Client} from "../../model/client";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  countries: Country[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditClientComponent>,
              private countryService: CountryApiService,
              @Inject(MAT_DIALOG_DATA) public client: Client) {

    countryService.allCountries().subscribe(value => this.countries = value);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      name: [this.client.name, Validators.required ],
      address: [this.client.address, Validators.required],
      city: [this.client.city,Validators.required],
      zipCode: [this.client.zipCode, Validators.required],
      country: [this.client.country, Validators.required],
      isActive: [this.client.isActive],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }



}
