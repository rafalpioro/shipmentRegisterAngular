import { Component, OnInit } from '@angular/core';
import {Country} from "../../model/country";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryApiService} from "../../admin/country/country-api.service";
import {Router} from "@angular/router";

import {ClientApiService} from "../client-api.service";
import {Client} from "../../model/client";
import {UniqueClientValidator} from "../unique-client-validator.directive";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  countries: Country[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private clientService: ClientApiService,
              private countryService: CountryApiService,
              private router: Router) {
    countryService.allCountries().subscribe(value => this.countries = value);
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      id: [null],
      name: ['',  Validators.required, UniqueClientValidator(this.clientService)],
      address: ['', Validators.required ],
      city: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      zipCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      country: ['', Validators.required],
      isActive: ['1'],
    });
  }

  save() {
    const client: Client = Object.assign({}, this.form.value);
    this.clientService.addNewClient(client).subscribe(value => {
      this.router.navigate(['clients']);
    }, error =>{
      alert("Could not add client to database");
    } );

  }

  close() {
    this.router.navigate(['clients']);
  }

}
