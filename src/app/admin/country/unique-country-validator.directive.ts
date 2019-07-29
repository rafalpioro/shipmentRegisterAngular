import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CountryApiService} from "./country-api.service";


export function UniqueCountryValidator(countryService: CountryApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return countryService.getCountryTypeByName(control.value).pipe(
      map(country => {
        return country != null ? {'UniqueCountryValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueCountryValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueCountryValidatorDirective, multi: true}]
})
export class UniqueCountryValidatorDirective implements AsyncValidator {

  constructor(private countryService: CountryApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.countryService.getCountryTypeByName(control.value).pipe(
      map(country => {
        return country != null ? {'UniqueCountryValidator' : true} : null;
      })
    );
  }

}
