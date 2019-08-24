import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort} from "@angular/material";
import {Recipient} from "../../model/recipient";
import {RecipientApiService} from "../recipient-api.service";
import {Router} from "@angular/router";
import {RecipientsDatasource} from "./recipients-datasource";
import {tap} from "rxjs/operators";
import {EditRecipientComponent} from "../edit-recipient/edit-recipient.component";
import {AuthenticationService} from "../../service/security/authentication.service";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-all-recipients',
  templateUrl: './all-recipients.component.html',
  styleUrls: ['./all-recipients.component.css']
})
export class AllRecipientsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['name', 'address', 'city', 'country', 'zipCode' ,'edit'];
  displayedColumnsForViewer = ['name', 'address', 'city', 'country', 'zipCode'];


  dataSource :  RecipientsDatasource;
  public total_count: number;
  data: Recipient;

  @ViewChild(MatSort, {static:false}) sort: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  private page: string = '0';
  private size: string = '5';

  constructor(public authenticationService: AuthenticationService, private recipientService: RecipientApiService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.dataSource = new RecipientsDatasource(this.recipientService);
    this.dataSource.loadRecipients(this.page,this.size);
    this.recipientService.allRecipients().subscribe(res=>{this.total_count = res.length});
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => {
          this.loadRecipientPage();

        })
      )
      .subscribe();
  }

  loadRecipientPage() {
    this.dataSource.loadRecipients(
      this.paginator.pageIndex.toString(),
      this.paginator.pageSize.toString());
  }

  addRecipient(){
    this.router.navigate(['/recipients/add']);
  }

  deactivateRecipient(recipient: Recipient){
    if(confirm("Are you sure you want to delete the recipient??")){
      this.recipientService.deactivateRecipient(recipient.id).subscribe(
        res =>{
          this.recipientService.allRecipients().subscribe(res=>{this.total_count = res.length});
          this.loadRecipientPage();
        },
        err=>{alert("Could not delete recipient")}
      );
    }
  }

  openDialog(recipient: Recipient){

    const dialogConfig = new MatDialogConfig();


      this.data = recipient;

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = this.data;
      dialogConfig.width = '500px';

      const dialogRef = this.dialog.open(EditRecipientComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(data => this.recipientService.updateRecipient(recipient)
        .subscribe(res=>{
          this.data = res;

        this.show();
      },error1 => {
          alert("Alert form openDialog")
        })
      );
  }


}
