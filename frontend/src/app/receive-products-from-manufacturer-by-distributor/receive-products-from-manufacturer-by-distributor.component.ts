import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BlockchainService } from "../services/blockchain.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-receive-products-from-manufacturer-by-distributor",
  templateUrl:
    "./receive-products-from-manufacturer-by-distributor.component.html",
  styleUrls: [
    "./receive-products-from-manufacturer-by-distributor.component.scss",
  ],
})
export class ReceiveProductsFromManufacturerByDistributorComponent
  implements OnInit {
  manubyDistForm: FormGroup;
  public returnValue: string;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<
      ReceiveProductsFromManufacturerByDistributorComponent
    >
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    //     @Param(yup.string())
    //     distributorId: string,
    //     @Param(yup.string())
    //     shippingID: string
    this.manubyDistForm = new FormGroup({
      distributorId: new FormControl("", Validators.required),
      shippingID: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService
      .receiveProductsFromManufacturerByDistributor(this.manubyDistForm.value)
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
    this.manubyDistForm.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
