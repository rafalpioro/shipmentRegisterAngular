import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserApiService} from "./user-api.service";



export function UniqueUserValidator(userService: UserApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getUserByEmail(control.value).pipe(
      map(users => {
        return users != null ? {'UniqueUserValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueUserValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUserValidatorDirective, multi: true}]
})
export class UniqueUserValidatorDirective implements AsyncValidator {

  constructor(private userService: UserApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.userService.getUserByEmail(control.value).pipe(
      map(users => {
        return users != null ? {'UniqueUserValidator' : true} : null;
      })
    );
  }

}
