import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CarrierTypeApiService} from "./carrier-type-api.service";
import {CarrierType} from "../../model/carrier-type";
import {EditCarrierTypeComponent} from "./edit-carrier-type/edit-carrier-type.component";
import {AddCarrierTypeComponent} from "./add-carrier-type/add-carrier-type.component";

@Component({
  selector: 'app-carrier-type',
  templateUrl: './carrier-type.component.html',
  styleUrls: ['./carrier-type.component.css']
})
export class CarrierTypeComponent implements AfterViewInit, OnInit{

  constructor(private carrierTypeService: CarrierTypeApiService, public dialog: MatDialog) { }

  carrierTypes: CarrierType[];
  check: boolean = false;
  data: CarrierType;

  ngOnInit() {
    this.loadCarrierTypses();
  }


  ngAfterViewInit(): void {
    this.loadCarrierTypses();
  }

  loadCarrierTypses():void{
    this.carrierTypeService.allCarrierTypes().subscribe(value => {
      if(value.length>0){
        this.carrierTypes = value;
        this.check = true;
      }
    })
  }

  openDialogEditCarrierType(carrierType: CarrierType){

    const dialogConfig = new MatDialogConfig();
    this.data = carrierType;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditCarrierTypeComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.carrierTypeService.updateCarrierType(carrierType)
      .subscribe(res=>{
        this.data = res;

        this.loadCarrierTypses();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

  openDialogAddCarrierType() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddCarrierTypeComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(res => {
        this.data = res;
        this.carrierTypeService.addNewCarrierType(this.data).subscribe(value => this.loadCarrierTypses());


      }, error1 => {
        alert("Alert form openDialog")
      })
  }

  deleteCarrierType(carrierType:CarrierType) {
    this.carrierTypeService.deleteCarrierType(carrierType.id).subscribe(value => this.loadCarrierTypses() )
  }

}
