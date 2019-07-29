import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IncotermsApiService} from "./incoterms-api.service";


export function UniqueIncotermValidator(incotermService: IncotermsApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return incotermService.getIncotermByName(control.value).pipe(
      map(incoterm => {
        return incoterm != null ? {'UniqueIncotermValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueIncotermValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueIncotermValidatorDirective, multi: true}]
})
export class UniqueIncotermValidatorDirective implements AsyncValidator{

  constructor(private incotermService: IncotermsApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.incotermService.getIncotermByName(control.value).pipe(
      map(incoterm => {
        return incoterm != null ? {'UniqueIncotermValidator' : true} : null;
      })
    );
  }

}
