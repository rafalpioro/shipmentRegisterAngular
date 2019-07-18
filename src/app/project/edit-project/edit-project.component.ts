import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {CountryApiService} from "../../admin/country/country-api.service";
import {ProjectStatus} from "../../model/project-status";
import {Client} from "../../model/client";
import {Project} from "../../model/project";
import {ProjectStatusApiService} from "../../admin/project-status/project-status-api.service";
import {ClientApiService} from "../../client/client-api.service";


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  projectStatuses: ProjectStatus[];
  clients: Client[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditProjectComponent>,
              private projectStatusService: ProjectStatusApiService,
              private clientService: ClientApiService,
              @Inject(MAT_DIALOG_DATA) public project: Project) {

    clientService.allClients().subscribe(value => this.clients = value);
    projectStatusService.allProjectStatus().subscribe(value => this.projectStatuses = value);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({

      number: [this.project.number,  Validators.required],
      name: [this.project.name, [Validators.required, Validators.minLength(2), Validators.maxLength(150) ]],
      client: [this.project.client,Validators.required],
      projectStatus: [this.project.projectStatus, Validators.required],
      startDate: [this.project.startDate, Validators.required],
      endDate: [this.project.endDate],
      isActive: [this.project.isActive],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
