import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {Incoterms} from "../../model/incoterms";
import {IncotermsApiService} from "./incoterms-api.service";
import {EditIncotermComponent} from "./edit-incoterm/edit-incoterm.component";
import {AddIncotermComponent} from "./add-incoterm/add-incoterm.component";

@Component({
  selector: 'app-incoterms',
  templateUrl: './incoterms.component.html',
  styleUrls: ['./incoterms.component.css']
})
export class IncotermsComponent implements OnInit, AfterViewInit {

  constructor(private incotermsService: IncotermsApiService, public dialog: MatDialog) { }

  incotermss: Incoterms[];
  check: boolean = false;
  data: Incoterms;

  ngOnInit() {
    this.loadIncoterms();
  }


  ngAfterViewInit(): void {
    this.loadIncoterms();
  }

  loadIncoterms():void{
    this.incotermsService.allIncoterms().subscribe(value => {
      if(value.length>0){
        this.incotermss = value;
        this.check = true;
      }
    })
  }

  openDialogEditIncoterm(incoterm: Incoterms){

    const dialogConfig = new MatDialogConfig();
    this.data = incoterm;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditIncotermComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.incotermsService.updateIncoterm(incoterm)
      .subscribe(res=>{
        this.data = res;

        this.loadIncoterms();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

  openDialogAddIncoterm() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddIncotermComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(res => {
        this.data = res;
        this.incotermsService.addNewIncoterm(this.data).subscribe(value => this.loadIncoterms());


      }, error1 => {
        alert("Alert form openDialog")
      })
  }

  deleteIncoterm(incoterm:Incoterms) {
    this.incotermsService.deleteIncoterm(incoterm.id).subscribe(value => this.loadIncoterms())
  }

}
