import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  username: String;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.getUsername().subscribe(
      (data) => {
        this.username = data.toString();
      },
      (error) => {
        localStorage.clear();
        this.router.navigate(["/login"]);
      }
    );
  }

  ngOnInit() {}
}
