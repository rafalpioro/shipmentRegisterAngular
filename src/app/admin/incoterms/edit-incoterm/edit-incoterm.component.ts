import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CarrierType} from "../../../model/carrier-type";
import {Incoterms} from "../../../model/incoterms";

@Component({
  selector: 'app-edit-incoterm',
  templateUrl: './edit-incoterm.component.html',
  styleUrls: ['./edit-incoterm.component.css']
})
export class EditIncotermComponent implements OnInit {

  form: FormGroup;


  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditIncotermComponent>,
              @Inject(MAT_DIALOG_DATA) public incoterms: Incoterms) {

    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.form = this.fb.group({
      name: [this.incoterms.name, Validators.required ],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
