import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {BranchApiService} from "./branch-api.service";

export function UniqueBranchValidator(branchService: BranchApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return branchService.getBranchByName(control.value).pipe(
      map(branches => {
        return branches != null ? {'UniqueRecipientValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueBranchValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueBranchValidatorDirective, multi: true}]
})
export class UniqueBranchValidatorDirective implements AsyncValidator {

  constructor(private branchService: BranchApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.branchService.getBranchByName(control.value).pipe(
      map(branches => {
        return branches != null ? {'UniqueBranchValidator' : true} : null;
      })
    );
  }

}
