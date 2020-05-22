import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

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
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.manubyDistForm = new FormGroup({
      distID: new FormControl("", Validators.required),
      shippingID: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    console.log("Details Entered");
    this.manubyDistForm.reset();
    this.router.navigate(["/dashboard"]);
  }
}
