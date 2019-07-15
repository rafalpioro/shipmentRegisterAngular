import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ProjectApiService} from "./project-api.service";


export function uniqueProjectValidator(projectService: ProjectApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return projectService.getProjectByNumber(control.value).pipe(
      map(projects => {
        return projects != null ? {'uniqueProjectValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[uniqueProjectValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueProjectValidatorDirective, multi: true}]
})
export class UniqueProjectValidatorDirective implements AsyncValidator {

  constructor(private projectService: ProjectApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.projectService.getProjectByNumber(control.value).pipe(
      map(projects => {
        return projects != null ? {'uniqueProjectValidator' : true} : null;
      })
    );
  }

}
