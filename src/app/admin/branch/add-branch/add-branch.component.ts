import {Component, Inject, OnInit} from '@angular/core';
import {Country} from "../../../model/country";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {CountryApiService} from "../../country/country-api.service";
import {UniqueBranchValidator} from "../unique-branch-validator.directive";
import {BranchApiService} from "../branch-api.service";


@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {


  countries: Country[];
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddBranchComponent>,
              private countryService: CountryApiService,
              private branchService : BranchApiService) {

    countryService.allCountries().subscribe(value => this.countries = value);
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required, UniqueBranchValidator(this.branchService) ],
      address: ['', Validators.required],
      city: ['',Validators.required],
      zipCode: ['', Validators.required],
      country: [null, Validators.required],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
