import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataSharingService } from "../services/data-sharing.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})

export class HeaderComponent implements OnInit {
  tokenValue: String;
  isUserLoggedIn: boolean;

  constructor(private router: Router, private dataSharingService: DataSharingService) {
    this.tokenValue = localStorage.getItem("token");
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }

  ngOnInit() {
    //this.tokenValue = localStorage.getItem("token");
  }

  logout() {
    console.log("Logout in Progress");
    this.dataSharingService.isUserLoggedIn.next(false);
    localStorage.clear();
    this.router.navigate(["/home"]);
    this.tokenValue = null;
  }
}
