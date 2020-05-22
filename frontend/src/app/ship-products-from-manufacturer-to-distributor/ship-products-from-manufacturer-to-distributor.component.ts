import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

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
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.manutodistForm = new FormGroup({
      manuId: new FormControl("", Validators.required),
      distID: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      shippingID: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    console.log("Details Entered");
    this.manutodistForm.reset();
    this.router.navigate(["/dashboard"]);
  }
}
