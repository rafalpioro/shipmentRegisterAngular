import { Component, OnInit } from '@angular/core';
import {ProjectStatus} from "../../model/project-status";
import {Client} from "../../model/client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectApiService} from "../../project/project-api.service";
import {ProjectStatusApiService} from "../../admin/project-status/project-status-api.service";
import {ClientApiService} from "../../client/client-api.service";
import {Router} from "@angular/router";
import {uniqueProjectValidator} from "../../project/unique-project-validator.directive";
import {Project} from "../../model/project";
import {Branch} from "../../model/branch";
import {Userr} from "../../model/userr";
import {Recipient} from "../../model/recipient";
import {ShipmentStatus} from "../../model/shipment-status";
import {Carrier} from "../../model/carrier";
import {TransactionType} from "../../model/transaction-type";
import {BranchApiService} from "../../admin/branch/branch-api.service";
import {UserApiService} from "../../admin/user/user-api.service";
import {RecipientApiService} from "../../recipient/recipient-api.service";
import {ShipmentApiService} from "../shipment-api.service";
import {TransactionTypeApiService} from "../../admin/transaction-type/transaction-type-api.service";
import {ShipmentStatusApiService} from "../../admin/shipment-status/shipment-status-api.service";
import {CarrierApiService} from "../../carrier/carrier-api.service";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Shipment} from "../../model/shipment";
import {Incoterms} from "../../model/incoterms";
import {IncotermsApiService} from "../../admin/incoterms/incoterms-api.service";

@Component({
  selector: 'app-add-shipment',
  templateUrl: './add-shipment.component.html',
  styleUrls: ['./add-shipment.component.css']
})
export class AddShipmentComponent implements OnInit {

  branches: Branch[];
  clients: Client[];
  projects: Project[];
  recipients: Recipient[];
  incotermss: Incoterms[];
  shipmentStatuses: ShipmentStatus[];
  carriers: Carrier[];
  transactionTypes: TransactionType[];
  form: FormGroup;

  sent: String = null;
  shipmentStat: ShipmentStatus = null;
  export_: TransactionType = null;
  id: string;
  userr: Userr;

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private branchService: BranchApiService,
              private clientService: ClientApiService,
              private projectService: ProjectApiService,
              private recipientsService: RecipientApiService,
              private incotermsService: IncotermsApiService,
              private shipmentStatusService: ShipmentStatusApiService,
              private carrierService: CarrierApiService,
              private transactionService: TransactionTypeApiService,
              private shipmentService: ShipmentApiService,
              private userService: UserApiService,
              private router: Router) {
    branchService.allBranches().subscribe(value => this.branches = value);
    clientService.allClients().subscribe(value => this.clients = value);
    projectService.allProjects().subscribe(value => this.projects = value);
    recipientsService.allRecipients().subscribe(value => this.recipients = value);
    incotermsService.allIncoterms().subscribe(value => this.incotermss = value);
    shipmentStatusService.allShipmentStatus().subscribe(value => this.shipmentStatuses = value);
    carrierService.allCarriers().subscribe(value => this.carriers = value);
    transactionService.allTransactionTypes().subscribe(value => this.transactionTypes = value);

    this.createForm();
  }

  ngOnInit() {
    this.id = this.authenticationService.getIdFromToken();
    this.userService.getUserById(Number(this.id)).subscribe(value => this.userr = value);
  }


  createForm() {
    this.form = this.fb.group({
      id: [null],
      branch: ['',  Validators.required ],
      userr: [null],
      project: ['',Validators.required],
      recipient: ['', Validators.required],
      incoterms: [null, Validators.required],
      shipmentStatus: ['', Validators.required],
      sendDate: [''],
      carrier: [null],
      deliveryDate: [''],
      pod: [''],
      transactionType: ['', Validators.required],
      mrn: [null,[Validators.minLength(19), Validators.maxLength(19)]],
      isActive: ['1'],
    });
  }

  save() {
    const shipment: Shipment = Object.assign({}, this.form.value);
    shipment.userr = this.userr;
    this.shipmentService.addNewShipment(shipment).subscribe(value => {
      this.router.navigate(['shipments']);
    }, error =>{
      alert("Could not add shipment to database");
    } );

  }

  close() {
    this.router.navigate(['shipments']);
  }

}
