import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";
import { BlockchainService } from "../services/blockchain.service";

@Component({
  selector: "app-fetch-salts",
  templateUrl: "./fetch-salts.component.html",
  styleUrls: ["./fetch-salts.component.scss"],
})
export class FetchSaltsComponent implements OnInit {
  public fetchSaltsForm: FormGroup;
  public rawMaterial: FormArray;

  public returnValue: string;
  constructor(
    private fb: FormBuilder,
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<FetchSaltsComponent>
  ) {
    // supplierId: string,
    // @Param(yup.object())
    // rawMaterialSupply: Map<string, number>
    this.fetchSaltsForm = this.fb.group({
      rawMaterialSupply: this.fb.array([this.createrawMaterial()]),
      supplierId: new FormControl(
        localStorage.getItem("role") === "supplier"
          ? localStorage.getItem("username")
          : "",
        Validators.required
      ),
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
    this.rawMaterial = this.fetchSaltsForm.get(
      "rawMaterialSupply"
    ) as FormArray;
    this.rawMaterial.push(this.createrawMaterial());
  }
  removeSalt(i: number) {
    this.rawMaterial.removeAt(i);
  }
  get saltControls() {
    return this.fetchSaltsForm.get("rawMaterialSupply")["controls"];
  }

  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService.fetchSalts(this.fetchSaltsForm.value).subscribe(
      (data) => {
        this.returnValue = "Salt has been added into your storage successfully";
        this.closeForm();
      },
      (error) => {
        this.returnValue = error.error.message;
        this.closeForm();
      }
    );
  }

  closeForm() {
    this.fetchSaltsForm.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
