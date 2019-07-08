import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipientApiService} from "../../recipient/recipient-api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CarrierType} from "../../model/carrier-type";
import {CarrierTypeApiService} from "../../admin/carrier-type/carrier-type-api.service";
import {Carrier} from "../../model/carrier";

@Component({
  selector: 'app-edit-carrier',
  templateUrl: './edit-carrier.component.html',
  styleUrls: ['./edit-carrier.component.css']
})
export class EditCarrierComponent implements OnInit {

  carrierTypes: CarrierType[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditCarrierComponent>,
              private carrierTypeService: CarrierTypeApiService,
              @Inject(MAT_DIALOG_DATA) public carrier: Carrier) {

    carrierTypeService.allCarrierTypes().subscribe(value => this.carrierTypes = value);
    this.createForm();
  }

  ngOnInit() {
    console.log(this.carrierTypes)
  }

  createForm(){
    this.form = this.fb.group({
      name: [this.carrier.name, Validators.required ],
      carrierType: [this.carrier.carrierType, Validators.required],
      isActive: [this.carrier.isActive],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
