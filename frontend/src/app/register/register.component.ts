import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  regsiterForm: FormGroup;
  constructor() {
    this.regsiterForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, this.passwordValidator),
    });

    this.regsiterForm.controls.password.valueChanges.subscribe((x) =>
      this.regsiterForm.controls.confirmPassword.updateValueAndValidity()
    );
  }
  passwordValidator(control: AbstractControl) {
    if (control && (control.value != null || control.value != undefined)) {
      const confirmPasswordValue = control.value;

      const passwordControl = control.root.get("password");
      if (passwordControl) {
        const passwordValue = passwordControl.value;
        if (passwordValue !== confirmPasswordValue || passwordValue === "") {
          return {
            isError: true,
          };
        }
      }
    }
    return null;
  }
  ngOnInit() {}
}
