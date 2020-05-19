import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  tokenValue: String;
  constructor(private router: Router) {}

  ngOnInit() {
    this.tokenValue = localStorage.getItem("token");
  }

  logout() {
    console.log("Logout in Progress");
    localStorage.clear();
    this.router.navigate(["/home"]);
    this.tokenValue = null;
  }
}
