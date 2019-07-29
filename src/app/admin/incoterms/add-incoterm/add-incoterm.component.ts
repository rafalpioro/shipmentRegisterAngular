import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {CarrierTypeApiService} from "../../carrier-type/carrier-type-api.service";
import {UniqueCarrierTypeValidator} from "../../carrier-type/unique-carrier-type-validator.directive";
import {IncotermsApiService} from "../incoterms-api.service";
import {UniqueIncotermValidator} from "../unique-incoterm-validator.directive";

@Component({
  selector: 'app-add-incoterm',
  templateUrl: './add-incoterm.component.html',
  styleUrls: ['./add-incoterm.component.css']
})
export class AddIncotermComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddIncotermComponent>,
              private incotermsService : IncotermsApiService) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required, UniqueIncotermValidator(this.incotermsService) ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }
}
