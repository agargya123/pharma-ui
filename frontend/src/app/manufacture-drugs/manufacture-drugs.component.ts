import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-manufacture-drugs',
  templateUrl: './manufacture-drugs.component.html',
  styleUrls: ['./manufacture-drugs.component.scss']
})
export class ManufactureDrugsComponent implements OnInit {
  manufacturedrugsForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { this.createForm(); }

  ngOnInit() {
  }
  createForm() {
    this.manufacturedrugsForm = new FormGroup({
      manufacturerID: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      genericName: new FormControl("",Validators.required),
      productsCreated: new FormControl(0, Validators.required),
      expiryDate: new FormControl("", Validators.required),
    });
  }
  onSubmit() {
    
    console.log("Entry is made");
    this.manufacturedrugsForm.reset();
    this.router.navigate(["/dashboard"]);
    
    }
}
