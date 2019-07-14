import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from "@angular/material";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {ClientsDatasource} from "./clients-datasource";
import {ClientApiService} from "../client-api.service";
import {Client} from "../../model/client";
import {EditClientComponent} from "../edit-client/edit-client.component";

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['name', 'address', 'city', 'country', 'zipCode' ,'edit'];
  displayedColumnsForViewer = ['name', 'address', 'city', 'country', 'zipCode'];

  dataSource :  ClientsDatasource;
  public total_count: number;
  data: Client;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  private page: string = '0';
  private size: string = '5';

  constructor(public authenticationService: AuthenticationService, private clientService: ClientApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.dataSource = new ClientsDatasource(this.clientService);
    this.dataSource.loadClients(this.page,this.size);
    this.clientService.allClients().subscribe(res=>{this.total_count = res.length});
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadClientPage();

        })
      )
      .subscribe();
  }

  loadClientPage() {
    this.dataSource.loadClients(
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString());
  }

  addClient(){
    this.router.navigate(['clients/add']);
  }

  deactivateClient(client: Client){
    if(confirm("Are you sure you want to delete the client??")){
      this.clientService.deactivateClient(client.id).subscribe(
        res =>{
          this.clientService.allClients().subscribe(res=>{this.total_count = res.length});
          this.loadClientPage();
        },
        err=>{alert("Could not delete client")}
      );
    }
  }

  openDialog(client: Client){

    const dialogConfig = new MatDialogConfig();


    this.data = client;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.data;

    this.dialog.open(EditClientComponent, dialogConfig);
    //
    const dialogRef = this.dialog.open(EditClientComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.clientService.updateClient(client)
      .subscribe(res=>{
        this.data = res;

        this.show();
      },error1 => {
        alert("Alert form openDialog")
      })
    );
  }


}
