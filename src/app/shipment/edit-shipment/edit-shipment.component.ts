import {Component, Inject, OnInit} from '@angular/core';
import {Client} from "../../model/client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import {ClientApiService} from "../../client/client-api.service";
import {Project} from "../../model/project";
import {Branch} from "../../model/branch";
import {Recipient} from "../../model/recipient";
import {ShipmentStatus} from "../../model/shipment-status";
import {Carrier} from "../../model/carrier";
import {TransactionType} from "../../model/transaction-type";
import {AuthenticationService} from "../../service/security/authentication.service";
import {BranchApiService} from "../../admin/branch/branch-api.service";
import {ProjectApiService} from "../../project/project-api.service";
import {RecipientApiService} from "../../recipient/recipient-api.service";
import {ShipmentStatusApiService} from "../../admin/shipment-status/shipment-status-api.service";
import {CarrierApiService} from "../../carrier/carrier-api.service";
import {TransactionTypeApiService} from "../../admin/transaction-type/transaction-type-api.service";
import {Shipment} from "../../model/shipment";


@Component({
  selector: 'app-edit-shipment',
  templateUrl: './edit-shipment.component.html',
  styleUrls: ['./edit-shipment.component.css']
})
export class EditShipmentComponent implements OnInit {

  branches: Branch[];
  clients: Client[];
  projects: Project[];
  recipients: Recipient[];
  shipmentStatuses: ShipmentStatus[];
  carriers: Carrier[];
  transactionTypes: TransactionType[];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditShipmentComponent>,
              private authenticationService: AuthenticationService,
              private branchService: BranchApiService,
              private clientService: ClientApiService,
              private projectService: ProjectApiService,
              private recipientsService: RecipientApiService,
              private shipmentStatusService: ShipmentStatusApiService,
              private carrierService: CarrierApiService,
              private transactionService: TransactionTypeApiService,
              @Inject(MAT_DIALOG_DATA) public shipment: Shipment) {

    branchService.allBranches().subscribe(value => this.branches = value);
    clientService.allClients().subscribe(value => this.clients = value);
    projectService.allProjects().subscribe(value => this.projects = value);
    recipientsService.allRecipients().subscribe(value => this.recipients = value);
    shipmentStatusService.allShipmentStatus().subscribe(value => this.shipmentStatuses = value);
    carrierService.allCarriers().subscribe(value => this.carriers = value);
    transactionService.allTransactionTypes().subscribe(value => this.transactionTypes = value);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      branch: [this.shipment.branch,  Validators.required ],
      user: [this.shipment.userr],
      project: [this.shipment.project,Validators.required],
      recipient: [this.shipment.recipient, Validators.required],
      shipmentStatus: [this.shipment.shipmentStatus, Validators.required],
      sendDate: [this.shipment.sendDate],
      carrier: [this.shipment.carrier],
      deliveryDate: [this.shipment.deliveryDate],
      pod: [this.shipment.pod],
      transactionType: [this.shipment.transactionType, Validators.required],
      mrn: [this.shipment.mrn,[Validators.minLength(19), Validators.maxLength(19)]],
      isActive: [this.shipment.isActive],
    });

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
