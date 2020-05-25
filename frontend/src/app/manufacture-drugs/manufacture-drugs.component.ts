import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BlockchainService } from "../services/blockchain.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-manufacture-drugs",
  templateUrl: "./manufacture-drugs.component.html",
  styleUrls: ["./manufacture-drugs.component.scss"],
})
export class ManufactureDrugsComponent implements OnInit {
  manufacturedrugsForm: FormGroup;
  public rawMaterial: FormArray;
  public returnValue: string;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<ManufactureDrugsComponent>,
    private fb: FormBuilder
  ) {
    //     @Param(yup.string())
    //     manufacturerId: string,
    //     @Param(yup.object())
    //     rawMaterialConsumed: Map<string, number>,
    //     @Param(yup.string())
    //     drugName: string,
    //     @Param(yup.string())
    //     genericName: string,
    //     @Param(yup.number())
    //     productsCreated: number,
    //     @Param(yup.string())
    //     expiryDate: string
    this.manufacturedrugsForm = this.fb.group({
      rawMaterialConsumed: this.fb.array([this.createrawMaterial()]),
      manufacturerId: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      genericName: new FormControl("", Validators.required),
      productsCreated: new FormControl(0, Validators.required),
      expiryDate: new FormControl("", Validators.required),
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
    this.rawMaterial = this.manufacturedrugsForm.get(
      "rawMaterialConsumed"
    ) as FormArray;
    this.rawMaterial.push(this.createrawMaterial());
  }
  removeSalt(i: number) {
    this.rawMaterial.removeAt(i);
  }
  get saltControls() {
    return this.manufacturedrugsForm.get("rawMaterialConsumed")["controls"];
  }
  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService
      .manufactureDrugs(this.manufacturedrugsForm.value)
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
    this.manufacturedrugsForm.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
