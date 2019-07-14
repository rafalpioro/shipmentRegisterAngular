import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ClientApiService} from "./client-api.service";


export function UniqueClientValidator(clientService: ClientApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return clientService.getClientByName(control.value).pipe(
      map(recipients => {
        return recipients != null ? {'UniqueClientValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueClientValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueClientValidatorDirective, multi: true}]
})
export class UniqueClientValidatorDirective implements AsyncValidator {

  constructor(private clientService: ClientApiService ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.clientService.getClientByName(control.value).pipe(
      map(clients => {
        return clients != null ? {'UniqueClientValidator' : true} : null;
      })
    );
  }

}
