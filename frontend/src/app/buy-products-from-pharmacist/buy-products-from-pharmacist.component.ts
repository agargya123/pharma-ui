import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BlockchainService } from "../services/blockchain.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-buy-products-from-pharmacist",
  templateUrl: "./buy-products-from-pharmacist.component.html",
  styleUrls: ["./buy-products-from-pharmacist.component.scss"],
})
export class BuyProductsFromPharmacistComponent implements OnInit {
  buyfromPharma: FormGroup;
  returnValue: string;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<BuyProductsFromPharmacistComponent>
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    //     @Param(yup.string())
    //     pharmacistId: string,
    //     @Param(yup.string())
    //     drugName: string,
    //     @Param(yup.number())
    //     boughtProducts: number,
    //     @Param(yup.string())
    //     customerID: string,
    //     @Param(yup.string())
    //     invoiceNumber: string
    this.buyfromPharma = new FormGroup({
      pharmacistId: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      boughtProducts: new FormControl(0, Validators.required),
      customerID: new FormControl("", Validators.required),
      invoiceNumber: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService
      .buyProductsFromPharmacist(this.buyfromPharma.value)
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
    this.buyfromPharma.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
