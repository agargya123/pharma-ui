import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
} from "@angular/material";
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
  methods: any[];
  config: MatSnackBarConfig;

  componentName: any;
  constructor(
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog,
    private methodService: MethodService,
    private _snackBar: MatSnackBar
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

    this.methods = this.methodService.getMethodByRole(this.role);
  }

  ngOnInit() {}

  openDialogForm(method: any) {
    this.componentName = this.methodService.getComponentByMethod(
      method.function
    );
    this.dialog
      .open(this.componentName, {
        autoFocus: false,
        maxHeight: "90vh",
        width: "100vh",
      })
      .afterClosed()
      .subscribe(
        (data) => this.openSnackBar(data.message),
        (error) => console.log(error)
      );
  }

  horizontalPosition: MatSnackBarHorizontalPosition = "start";
  verticalPosition: MatSnackBarVerticalPosition = "bottom";
  openSnackBar(data) {
    console.log(data);
    this._snackBar.open(data, "OK", {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
