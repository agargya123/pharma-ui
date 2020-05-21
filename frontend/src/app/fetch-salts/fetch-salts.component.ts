import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-fetch-salts",
  templateUrl: "./fetch-salts.component.html",
  styleUrls: ["./fetch-salts.component.scss"],
})
export class FetchSaltsComponent implements OnInit {
  fetchSaltsForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.fetchSaltsForm = new FormGroup({
      supplierid: new FormControl("", Validators.required),
      salts: new FormControl("", Validators.required),
      quantity: new FormControl(0, Validators.required),
    });
  }
  openFetchSatsForm() {
    this.dialog.open(FetchSaltsComponent, { width: "500px", height: "450px" });
  }
  onSubmit() {
    console.log("Order is placed");
    this.fetchSaltsForm.reset();
    this.dialog.closeAll();
    this.router.navigate(["/dashboard"]);
  }
}
