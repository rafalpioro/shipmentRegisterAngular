import {Component, OnInit, ViewChild} from '@angular/core';
import {Carrier} from "../../model/carrier";
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {CarrierApiService} from "../carrier-api.service";
import {AuthenticationService} from "../../service/security/authentication.service";
import {EditRecipientComponent} from "../../recipient/edit-recipient/edit-recipient.component";
import {EditCarrierComponent} from "../edit-carrier/edit-carrier.component";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-all-carriers',
  templateUrl: './all-carriers.component.html',
  styleUrls: ['./all-carriers.component.css']
})
export class AllCarriersComponent implements OnInit {

  displayedColumns = ['name', 'carrierType', 'edit'];
  displayedColumnsForViewer =  ['name', 'carrierType'];
  dataSource :  MatTableDataSource<Carrier>;
  data: Carrier;
  private URL =environment.baseUrl

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  constructor(private authenticationService: AuthenticationService, private carrierService: CarrierApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.show();
  }

  show(){
    this.carrierService.allCarriers().subscribe(value => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      this.dataSource.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'carrierType':
            return item.carrierType.name;
          default:
            return item[property];
        }
      }

      this.dataSource.filterPredicate = (data, filter: string)  => {
        const accumulator = (currentTerm, key) => {
          switch(key){
            case 'carrierType':
              return  currentTerm + data.carrierType.name;
            default:
              return currentTerm + data[key];
          }
        };
        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
        // Transform the filter by converting it to lowercase and removing whitespace.
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };
    })
  }

  doFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCarrier(){
    this.router.navigate([this.URL+'carriers/add']);
  }

  deactivateCarrier(carrier: Carrier){
    if(confirm("Are you sure you want to delete the recipient??")){
      this.carrierService.deactivateCarrier(carrier.id).subscribe(
        res =>{
          this.show();
        },
        err=>{alert("Could not delete recipient")}
      );
    }
  }

  openDialog(carrier: Carrier){

    const dialogConfig = new MatDialogConfig();


      this.data = carrier;

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = this.data;
      dialogConfig.width = '500px';

      const dialogRef = this.dialog.open(EditCarrierComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(data => this.carrierService.updateCarrier(carrier)
        .subscribe(res => {
          this.data = res;

          this.show();
        }, error1 => {alert("Alert form openDialog")
        })
      );
    }


}
