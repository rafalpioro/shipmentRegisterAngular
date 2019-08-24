import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from "@angular/material";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {ClientsDatasource} from "./clients-datasource";
import {ClientApiService} from "../client-api.service";
import {Client} from "../../model/client";
import {EditClientComponent} from "../edit-client/edit-client.component";
import {merge} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['name', 'address', 'city', 'country', 'zipCode' ,'edit'];
  displayedColumnsForViewer = ['name', 'address', 'city', 'country', 'zipCode'];
  private URL =environment.baseUrl;

  dataSource :  ClientsDatasource;
  public total_count: number;
  data: Client;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  private page: string = '0';
  private size: string = '5';
  private sorting: string = 'asc';

  constructor(public authenticationService: AuthenticationService, private clientService: ClientApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.dataSource = new ClientsDatasource(this.clientService);
    this.dataSource.loadClients(this.sorting, this.page,this.size);
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

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadClientPage())
      )
      .subscribe();

  }

  loadClientPage() {
    this.dataSource.loadClients(
      this.sort.direction,
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString());
  }

  addClient(){
    this.router.navigate([this.URL +'clients/add']);
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
    dialogConfig.width = '500px';

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
