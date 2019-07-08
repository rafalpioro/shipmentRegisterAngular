import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

import {map} from "rxjs/operators";
import {CarrierApiService} from "./carrier-api.service";

export function uniqueCarrierValidator(carrierService: CarrierApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return carrierService.getCarrierByName(control.value).pipe(
      map(carriers => {
        return carriers != null ? {'UniqueCarrierValidator' : true} : null;
      })
    );
  };
}


@Directive({
  selector: '[UniqueCarrierValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueCarrierValidatorDirective, multi: true}]
})
export class UniqueCarrierValidatorDirective implements AsyncValidator{

  constructor(private carrierService: CarrierApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
 {
    return this.carrierService.getCarrierByName(control.value).pipe(
      map(carriers => {
        return carriers != null ? {'UniqueCarrierValidator' : true} : null;
      })
    );
  }

}
