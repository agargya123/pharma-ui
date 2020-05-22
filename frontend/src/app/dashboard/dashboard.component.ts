import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { FetchSaltsComponent } from "../fetch-salts/fetch-salts.component";
import { MethodService } from "../services/method.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  username: String;
  role: String;
  methods: String[];
  constructor(
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog,
    private methodService: MethodService
  ) {
    this.loginService.getUsername().subscribe(
      (data) => {
        {
          this.username = data.toString();
        }
      },
      (error) => {
        localStorage.clear();
        this.router.navigate(["/login"]);
      }
    );

    this.role = localStorage.getItem("role");

    this.methods = methodService.getMethodByRole(this.role);
  }

  ngOnInit() {}

  openDialogForm(method) {
    this.dialog.open(FetchSaltsComponent);
  }
}
