import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

}
