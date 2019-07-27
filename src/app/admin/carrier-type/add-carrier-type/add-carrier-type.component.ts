import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {UniqueCarrierTypeValidator} from "../unique-carrier-type-validator.directive";
import {CarrierTypeApiService} from "../carrier-type-api.service";

@Component({
  selector: 'app-add-carrier-type',
  templateUrl: './add-carrier-type.component.html',
  styleUrls: ['./add-carrier-type.component.css']
})
export class AddCarrierTypeComponent implements OnInit {


  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AddCarrierTypeComponent>,
              private carrierTypeService : CarrierTypeApiService) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required, UniqueCarrierTypeValidator(this.carrierTypeService) ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
