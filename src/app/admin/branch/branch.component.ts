import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Branch} from "../../model/branch";
import {BranchApiService} from "./branch-api.service";

import {MatDialog, MatDialogConfig} from "@angular/material";

import {EditBranchComponent} from "./edit-branch/edit-branch.component";
import {AddBranchComponent} from "./add-branch/add-branch.component";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements AfterViewInit, OnInit {

  constructor(private branchesService: BranchApiService, public dialog: MatDialog) { }

  branches: Branch[];
  check: boolean = false;
  data: Branch;

  ngOnInit() {
    this.loadBranch();
  }


  ngAfterViewInit(): void {
    this.loadBranch();
  }

  loadBranch():void{
    this.branchesService.allBranches().subscribe(value => {
      if(value.length>0){
        this.branches = value;
        this.check = true;
      }
    })
  }

  openDialogEditBranch(branch: Branch){

    const dialogConfig = new MatDialogConfig();
    this.data = branch;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditBranchComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.branchesService.updateBranch(branch)
      .subscribe(res=>{
        this.data = res;

        this.loadBranch();
      },error1 => {
        alert("Alert form openDialog")
      })
    );



  }

  openDialogAddBranch() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddBranchComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(res => {
        this.data = res;
        this.branchesService.addNewBranch(this.data).subscribe(value => this.loadBranch());


      }, error1 => {
        alert("Alert form openDialog")
      })
  }
}
