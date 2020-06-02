import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BlockchainService } from "../services/blockchain.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-export-products-to-pharmacist",
  templateUrl: "./export-products-to-pharmacist.component.html",
  styleUrls: ["./export-products-to-pharmacist.component.scss"],
})
export class ExportProductsToPharmacistComponent implements OnInit {
  exportToPharma: FormGroup;
  public returnValue: string;
  constructor(
    private blockchainService: BlockchainService,
    private dialogRef: MatDialogRef<ExportProductsToPharmacistComponent>
  ) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    //     @Param(yup.string())
    //     pharmacistID: string,
    //     @Param(yup.string())
    //     distributorId: string,
    //     @Param(yup.string())
    //     batchId: string
    this.exportToPharma = new FormGroup({
      pharmacistID: new FormControl("", Validators.required),
      distributorId: new FormControl("", Validators.required),
      batchId: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    // console.log(this.fetchSaltsForm.value);
    this.blockchainService
      .exportProductsToPharmacist(this.exportToPharma.value)
      .subscribe(
        (data) => {
          this.returnValue = "Drugs Exported Successfully";
          this.closeForm();
        },
        (error) => {
          this.returnValue = error.error.message;
          this.closeForm();
        }
      );
  }

  closeForm() {
    this.exportToPharma.reset();
    this.dialogRef.close({ message: this.returnValue });
  }
}
