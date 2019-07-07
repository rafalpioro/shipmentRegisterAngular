import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {RecipientApiService} from "./recipient-api.service";
import {map} from "rxjs/operators";

export function uniqueRecipientValidator(recipientService: RecipientApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return recipientService.getRecipientByName(control.value).pipe(
      map(recipients => {
        return recipients != null ? {'UniqueRecipientValidator' : true} : null;
      })
    );
  };
}


@Directive({
  selector: '[UniqueRecipientValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueRecipientValidatorDirective, multi: true}]
})
export class UniqueRecipientValidatorDirective implements AsyncValidator{

  constructor(private recipientService: RecipientApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
 {
    return this.recipientService.getRecipientByName(control.value).pipe(
      map(recipients => {
        return recipients != null ? {'UniqueRecipientValidator' : true} : null;
      })
    );
  }

}
