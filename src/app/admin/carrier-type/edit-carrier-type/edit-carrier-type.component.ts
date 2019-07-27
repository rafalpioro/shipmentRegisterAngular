import {Component, Inject, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CarrierType} from "../../../model/carrier-type";

@Component({
  selector: 'app-edit-carrier-type',
  templateUrl: './edit-carrier-type.component.html',
  styleUrls: ['./edit-carrier-type.component.css']
})
export class EditCarrierTypeComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditCarrierTypeComponent>,
              @Inject(MAT_DIALOG_DATA) public carrierType: CarrierType) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: [this.carrierType.name, Validators.required ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
