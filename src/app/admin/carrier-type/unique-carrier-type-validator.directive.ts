import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CarrierTypeApiService} from "./carrier-type-api.service";

export function UniqueCarrierTypeValidator(carrierTypeService: CarrierTypeApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return carrierTypeService.getCarrierTypeByName(control.value).pipe(
      map(carrierTypes => {
        return carrierTypes != null ? {'UniqueRecipientValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueCarrierTypeValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueCarrierTypeValidatorDirective, multi: true}]
})
export class UniqueCarrierTypeValidatorDirective implements AsyncValidator{

  constructor(private carrierTypeService: CarrierTypeApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.carrierTypeService.getCarrierTypeByName(control.value).pipe(
      map(carrierTypes => {
        return carrierTypes != null ? {'UniqueBranchValidator' : true} : null;
      })
    );
  }

}
