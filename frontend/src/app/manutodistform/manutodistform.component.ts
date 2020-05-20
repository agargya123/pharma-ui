import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-manutodistform',
  templateUrl: './manutodistform.component.html',
  styleUrls: ['./manutodistform.component.scss']
})
export class ManutodistformComponent implements OnInit {
  manutodistForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { this.createForm();}

  ngOnInit() {
  }
  createForm() {
    this.manutodistForm = new FormGroup({
      manuId: new FormControl("", Validators.required),
      distID: new FormControl("", Validators.required),
      drugName: new FormControl("",Validators.required),
      shippingID:new FormControl("",Validators.required)
    });
  }
  onSubmit() {
    
    console.log("Details Entered");
    this.manutodistForm.reset();
    this.router.navigate(["/dashboard"]);
    
    }
}
