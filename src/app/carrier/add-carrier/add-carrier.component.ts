import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import {Router} from "@angular/router";
import {CarrierType} from "../../model/carrier-type";
import {CarrierTypeApiService} from "../../admin/carrier-type/carrier-type-api.service";
import {Carrier} from "../../model/carrier";
import {CarrierApiService} from "../carrier-api.service";
import {uniqueCarrierValidator} from "../unique-carrier-validator.directive";

@Component({
  selector: 'app-add-carrier',
  templateUrl: './add-carrier.component.html',
  styleUrls: ['./add-carrier.component.css']
})
export class AddCarrierComponent implements OnInit {

  carrierTypes: CarrierType[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private carrierService: CarrierApiService,
              private carrierTypeService: CarrierTypeApiService,
              private router: Router) {
    carrierTypeService.allCarrierTypes().subscribe(value => this.carrierTypes = value);
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      id: [null],
      name: ['',  Validators.required, uniqueCarrierValidator(this.carrierService) ],
      carrierType: ['', Validators.required ],
      isActive: ['1'],
    });
  }

  save() {
    const carrier: Carrier = Object.assign({}, this.form.value);
    this.carrierService.addNewCarrier(carrier).subscribe(value => {
      this.router.navigate(['carriers']);
    }, error =>{
      alert("Could not add carrier to database");
    } );

  }

  close() {
    this.router.navigate(['carriers']);
  }

}
