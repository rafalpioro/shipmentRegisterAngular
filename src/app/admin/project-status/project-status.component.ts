import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ProjectStatus} from "../../model/project-status";
import {ProjectStatusApiService} from "./project-status-api.service";
import {EditProjectStatusComponent} from "./edit-project-status/edit-project-status.component";
import {AddProjectStatusComponent} from "./add-project-status/add-project-status.component";

@Component({
  selector: 'app-project-status',
  templateUrl: './project-status.component.html',
  styleUrls: ['./project-status.component.css']
})
export class ProjectStatusComponent implements OnInit {

  constructor(private projectStatusService: ProjectStatusApiService, public dialog: MatDialog) { }

  projectStatuses: ProjectStatus[];
  check: boolean = false;
  data: ProjectStatus;

  ngOnInit() {
    this.loadProjectStatus();
  }


  ngAfterViewInit(): void {
    this.loadProjectStatus();
  }

  loadProjectStatus():void{
    this.projectStatusService.allProjectStatus().subscribe(value => {
      if(value.length>0){
        this.projectStatuses = value;
        this.check = true;
      }
    })
  }

  openDialogEditProjectStatus(projectStatus: ProjectStatus){

    const dialogConfig = new MatDialogConfig();
    this.data = projectStatus;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditProjectStatusComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.projectStatusService.updateProjectStatus(projectStatus)
      .subscribe(res=>{
        this.data = res;

        this.loadProjectStatus();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

  openDialogAddProjectStatus() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddProjectStatusComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(res => {
        this.data = res;
        this.projectStatusService.addNewProjectStatus(this.data).subscribe(value => this.loadProjectStatus());


      }, error1 => {
        alert("Alert form openDialog")
      })
  }

  deleteProjectStatus(projectStatus:ProjectStatus) {
    this.projectStatusService.deleteProjectStatus(projectStatus.id).subscribe(value => this.loadProjectStatus() )
  }

}
