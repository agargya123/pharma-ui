import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-export-products-to-pharmacist',
  templateUrl: './export-products-to-pharmacist.component.html',
  styleUrls: ['./export-products-to-pharmacist.component.scss']
})
export class ExportProductsToPharmacistComponent implements OnInit {
  exportToPharma: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { this.createForm();}

  ngOnInit() {
  }
  createForm() {
    this.exportToPharma = new FormGroup({
      pharmaID: new FormControl("",Validators.required),
      distID: new FormControl("", Validators.required),
      shippingID:new FormControl(0,Validators.required)
     
    });
  }
  onSubmit() {
    
    console.log("Details Entered");
    this.exportToPharma.reset();
    this.router.navigate(["/dashboard"]);
    
    }
}
