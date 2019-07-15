import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjectStatus} from "../../model/project-status";
import {ProjectApiService} from "../project-api.service";
import {ProjectStatusApiService} from "../../admin/project-status/project-status-api.service";
import {uniqueProjectValidator} from "../unique-project-validator.directive";
import {ClientApiService} from "../../client/client-api.service";
import {Client} from "../../model/client";
import {Project} from "../../model/project";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  projectStatuses: ProjectStatus[];
  clients: Client[];
  form: FormGroup;
  selectedProjectStatus: ProjectStatus = null;

  constructor(private fb: FormBuilder,
              private projectService: ProjectApiService,
              private projectStatusService: ProjectStatusApiService,
              private clientService: ClientApiService,
              private router: Router) {
    projectStatusService.allProjectStatus().subscribe(value => this.projectStatuses = value);
    clientService.allClients().subscribe(value => this.clients = value);
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      id: [null],
      number: ['',  Validators.required, uniqueProjectValidator(this.projectService) ],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)] ],
      client: ['',Validators.required],
      projectStatus: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      isActive: ['1'],
    });
  }

  save() {
    const project: Project = Object.assign({}, this.form.value);
    this.projectService.addNewProject(project).subscribe(value => {
      this.router.navigate(['projects']);
    }, error =>{
      alert("Could not add project to database");
    } );

  }

  close() {
    this.router.navigate(['projects']);
  }
}
