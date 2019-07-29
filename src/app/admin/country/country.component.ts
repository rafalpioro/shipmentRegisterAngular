import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CarrierType} from "../../model/carrier-type";
import {EditCarrierTypeComponent} from "../carrier-type/edit-carrier-type/edit-carrier-type.component";
import {AddCarrierTypeComponent} from "../carrier-type/add-carrier-type/add-carrier-type.component";
import {CountryApiService} from "./country-api.service";
import {Country} from "../../model/country";
import {EditCountryComponent} from "./edit-country/edit-country.component";
import {AddCountryComponent} from "./add-country/add-country.component";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, AfterViewInit {

  constructor(private countryService: CountryApiService, public dialog: MatDialog) { }

  countries: Country[];
  check: boolean = false;
  data: Country;

  ngOnInit() {
    this.loadCountries();
  }


  ngAfterViewInit(): void {
    this.loadCountries();
  }

  loadCountries():void{
    this.countryService.allCountries().subscribe(value => {
      if(value.length>0){
        this.countries = value;
        this.check = true;
      }
    })
  }

  openDialogEditCountry(country: Country){

    const dialogConfig = new MatDialogConfig();
    this.data = country;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditCountryComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.countryService.updateCountry(country)
      .subscribe(res=>{
        this.data = res;

        this.loadCountries();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }

  openDialogAddCountry() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(AddCountryComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(res => {
        this.data = res;
        this.countryService.addNewCountry(this.data).subscribe(value => this.loadCountries());


      }, error1 => {
        alert("Alert form openDialog")
      })
  }

  deleteCountry(country:Country) {
    this.countryService.deleteCountry(country.id).subscribe(value => this.loadCountries() )
  }
}
