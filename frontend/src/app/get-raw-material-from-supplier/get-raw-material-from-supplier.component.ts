import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-get-raw-material-from-supplier",
  templateUrl: "./get-raw-material-from-supplier.component.html",
  styleUrls: ["./get-raw-material-from-supplier.component.scss"],
})
export class GetRawMaterialFromSupplierComponent implements OnInit {
  public getRawMaterialForm: FormGroup;
  public rawMaterial: FormArray;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.getRawMaterialForm = this.fb.group({
      rawMaterial: this.fb.array([this.createrawMaterial()]),
      supplierid: new FormControl("", Validators.required),
      manufacturerid: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  createrawMaterial(): FormGroup {
    return this.fb.group({
      salt: "",
      quantity: 0,
    });
  }
  addSalt(): void {
    this.rawMaterial = this.getRawMaterialForm.get("rawMaterial") as FormArray;
    this.rawMaterial.push(this.createrawMaterial());
  }
  removeSalt(i: number) {
    this.rawMaterial.removeAt(i);
  }
  get saltControls() {
    return this.getRawMaterialForm.get("rawMaterial")["controls"];
  }

  onSubmit() {
    console.log("Order is placed");
    this.getRawMaterialForm.reset();
  }
}
