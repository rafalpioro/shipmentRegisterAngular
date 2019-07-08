import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CountryApiService} from "../../admin/country/country-api.service";
import {Country} from "../../model/country";
import {Recipient} from "../../model/recipient";


@Component({
  selector: 'app-edit-recipient',
  templateUrl: './edit-recipient.component.html',
  styleUrls: ['./edit-recipient.component.css']
})
export class EditRecipientComponent implements OnInit {

  countries: Country[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditRecipientComponent>,
              private countryService: CountryApiService,
              @Inject(MAT_DIALOG_DATA) public recipient: Recipient) {

    countryService.allCountries().subscribe(value => this.countries = value);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      name: [this.recipient.name, Validators.required ],
      address: [this.recipient.address, Validators.required],
      city: [this.recipient.city,Validators.required],
      zipCode: [this.recipient.zipCode, Validators.required],
      country: [this.recipient.country, Validators.required],
      isActive: [this.recipient.isActive],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }


}
