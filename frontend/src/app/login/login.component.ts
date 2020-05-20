import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  successMessage: String;

  roles: String[] = ["supplier", "manufacturer", "distributor", "pharmacist"];
  constructor(
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      role: new FormControl(this.roles[0]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this.loginService.loginUser(this.loginForm.value).subscribe(
        (data) => {
          this.successMessage = "Login Successful";
          localStorage.setItem("token", data.toString());
          localStorage.setItem(
            "username",
            this.loginForm.get("username").value
          );
          localStorage.setItem("role", this.loginForm.get("role").value);
          this.router.navigate(["/dashboard"]);
        },
        (error) => {
          this.successMessage = error.error.message;
        }
      );
    }
  }
}
