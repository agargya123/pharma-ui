import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-manuby-dist-form',
  templateUrl: './manuby-dist-form.component.html',
  styleUrls: ['./manuby-dist-form.component.scss']
})
export class ManubyDistFormComponent implements OnInit {
  manubyDistForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { this.createForm();}


  ngOnInit() {
  }
  createForm() {
    this.manubyDistForm = new FormGroup({
      
      distID: new FormControl("", Validators.required),
      shippingID:new FormControl(0,Validators.required)
     
    });
  }
  onSubmit() {
    
    console.log("Details Entered");
    this.manubyDistForm.reset();
    this.router.navigate(["/dashboard"]);
    
    }
}
