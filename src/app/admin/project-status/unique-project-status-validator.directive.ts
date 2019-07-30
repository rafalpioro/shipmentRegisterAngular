import { Directive } from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ProjectStatusApiService} from "./project-status-api.service";

export function UniqueProjectStatusValidator(projectStatusService: ProjectStatusApiService) {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return projectStatusService.getProjectStatusByName(control.value).pipe(
      map(projectStatus => {
        return projectStatus != null ? {'UniqueProjectStatusValidator' : true} : null;
      })
    );
  };
}

@Directive({
  selector: '[UniqueProjectStatusValidator]'
})
export class UniqueProjectStatusValidatorDirective {

  constructor(private projectStatusService: ProjectStatusApiService) { }


  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  {
    return this.projectStatusService.getProjectStatusByName(control.value).pipe(
      map(projectStatus => {
        return projectStatus != null ? {'UniqueProjectStatusValidator' : true} : null;
      })
    );
  }

}
