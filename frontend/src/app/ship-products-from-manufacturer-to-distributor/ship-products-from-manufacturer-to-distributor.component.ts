import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BlockchainService } from "../services/blockchain.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-ship-products-from-manufacturer-to-distributor",
  templateUrl:
    "./ship-products-from-manufacturer-to-distributor.component.html",
  styleUrls: [
    "./ship-products-from-manufacturer-to-distributor.component.scss",
  ],
})
export class ShipProductsFromManufacturerToDistributorComponent
  implements OnInit {
  manutodistForm: FormGroup;
  public returnValue: string;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<
      ShipProductsFromManufacturerToDistributorComponent
    >
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    //     @Param(yup.string())
    //     manufacturerId: string,
    //     @Param(yup.string())
    //     distributorId: string,
    //     @Param(yup.string())
    //     drugName: string,
    //     @Param(yup.string())
    //     shippingID: string
    this.manutodistForm = new FormGroup({
      manufacturerId: new FormControl("", Validators.required),
      distributorId: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      shippingID: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService
      .shipProductsFromManufacturerToDistributor(this.manutodistForm.value)
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
    this.manutodistForm.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
