import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {Recipient} from "../../model/recipient";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from "@angular/material";
import {AuthenticationService} from "../../service/security/authentication.service";
import {RecipientApiService} from "../../recipient/recipient-api.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {EditRecipientComponent} from "../../recipient/edit-recipient/edit-recipient.component";
import {ProjectsDatasource} from "./projects-datasource";
import {ProjectApiService} from "../project-api.service";
import {Project} from "../../model/project";
import {EditProjectComponent} from "../edit-project/edit-project.component";

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['number', 'name', 'client', 'projectStatus', 'startDate' ,'endDate', 'edit'];
  displayedColumnsForViewer = ['number', 'name', 'client', 'projectStatus', 'startDate' ,'endDate'];

  dataSource :  ProjectsDatasource;
  public total_count: number;
  data: Project;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  private page: string = '0';
  private size: string = '5';

  constructor(private authenticationService: AuthenticationService, private projectService: ProjectApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.dataSource = new ProjectsDatasource(this.projectService);
    this.dataSource.loadProjects(this.page,this.size);
    this.projectService.allProjects().subscribe(res=>{this.total_count = res.length});
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadProjectPage();

        })
      )
      .subscribe();
  }

  loadProjectPage() {
    this.dataSource.loadProjects(
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString());
  }

  addProject(){
    this.router.navigate(['projects/add']);
  }

  deactivateProject(project: Project){
    if(confirm("Are you sure you want to delete the project??")){
      this.projectService.deactivateProject(project.id).subscribe(
        res =>{
          this.projectService.allProjects().subscribe(res=>{this.total_count = res.length});
          this.loadProjectPage();
        },
        err=>{alert("Could not delete project")}
      );
    }
  }

  openDialog(project: Project){

    const dialogConfig = new MatDialogConfig();


    this.data = project;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditProjectComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.projectService.updateProject(project)
      .subscribe(res=>{
        this.data = res;

        this.show();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

}
