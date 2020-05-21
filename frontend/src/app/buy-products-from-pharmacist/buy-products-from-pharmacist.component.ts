import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-buy-products-from-pharmacist",
  templateUrl: "./buy-products-from-pharmacist.component.html",
  styleUrls: ["./buy-products-from-pharmacist.component.scss"],
})
export class BuyProductsFromPharmacistComponent implements OnInit {
  buyfromPharma: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.buyfromPharma = new FormGroup({
      pharmacistId: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      boughtProducts: new FormControl(0, Validators.required),
      customerID: new FormControl("", Validators.required),
      invoiceNumber: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    console.log("Entry is made");
    this.buyfromPharma.reset();
    this.router.navigate(["/dashboard"]);
  }
}
