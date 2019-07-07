import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipientApiService} from "../recipient-api.service";
import {CountryApiService} from "../../admin/country/country-api.service";
import {Country} from "../../model/country";
import {Router} from "@angular/router";
import {Recipient} from "../../model/recipient";
import {uniqueRecipientValidator} from "../unique-recipient-validator.directive";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.css']
})
export class AddRecipientComponent implements OnInit {

  countries: Country[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private recipientService: RecipientApiService,
              private countryService: CountryApiService,
              private router: Router) {
    countryService.allCountries().subscribe(value => this.countries = value);
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['',  Validators.required, uniqueRecipientValidator(this.recipientService)],
      address: ['', Validators.required ],
      city: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      zipCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      country: ['', Validators.required],
      isActive: ['1'],
    });
  }

  save() {
    const recipient: Recipient = Object.assign({}, this.form.value);
    this.recipientService.addNewRecipient(recipient).subscribe(value => {
      this.router.navigate(['recipients']);
    }, error =>{
      alert("Could not add recipient to database");
    } );
  }

  close() {
    this.router.navigate(['recipients']);
  }
}
