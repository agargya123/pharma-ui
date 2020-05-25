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
import { BlockchainService } from "../services/blockchain.service";

@Component({
  selector: "app-get-raw-material-from-supplier",
  templateUrl: "./get-raw-material-from-supplier.component.html",
  styleUrls: ["./get-raw-material-from-supplier.component.scss"],
})
export class GetRawMaterialFromSupplierComponent implements OnInit {
  public getRawMaterialForm: FormGroup;
  public rawMaterial: FormArray;
  public returnValue: string;
  constructor(
    private fb: FormBuilder,
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<GetRawMaterialFromSupplierComponent>
  ) {
    //     @Param(yup.string())
    //     manufacturerId: string,
    //     @Param(yup.string())
    //     supplierId: string,
    //     @Param(yup.object())
    //     rawMaterialSupply: Map<string, number>
    this.getRawMaterialForm = this.fb.group({
      rawMaterialSupply: this.fb.array([this.createrawMaterial()]),
      supplierId: new FormControl("", Validators.required),
      manufacturerId: new FormControl("", Validators.required),
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
    this.rawMaterial = this.getRawMaterialForm.get(
      "rawMaterialSupply"
    ) as FormArray;
    this.rawMaterial.push(this.createrawMaterial());
  }
  removeSalt(i: number) {
    this.rawMaterial.removeAt(i);
  }
  get saltControls() {
    return this.getRawMaterialForm.get("rawMaterialSupply")["controls"];
  }

  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService
      .getRawMaterialFromSupplier(this.getRawMaterialForm.value)
      .subscribe(
        (data) => {
          this.returnValue = data;
          this.closeForm();
        },
        (error) => {
          this.returnValue = error.error.message;
          this.closeForm();
        }
      );
  }

  closeForm() {
    this.getRawMaterialForm.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
