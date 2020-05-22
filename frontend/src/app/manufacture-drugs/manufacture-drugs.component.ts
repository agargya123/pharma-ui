import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-manufacture-drugs",
  templateUrl: "./manufacture-drugs.component.html",
  styleUrls: ["./manufacture-drugs.component.scss"],
})
export class ManufactureDrugsComponent implements OnInit {
  manufacturedrugsForm: FormGroup;
  public rawMaterial: FormArray;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.manufacturedrugsForm = this.fb.group({
      rawMaterial: this.fb.array([this.createrawMaterial()]),
      manufacturerID: new FormControl("", Validators.required),
      drugName: new FormControl("", Validators.required),
      genericName: new FormControl("", Validators.required),
      productsCreated: new FormControl(0, Validators.required),
      expiryDate: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}
  createrawMaterial(): FormGroup {
    return this.fb.group({
      salt: "",
      quantity: 0,
    });
  }
  addSalt(): void {
    this.rawMaterial = this.manufacturedrugsForm.get(
      "rawMaterial"
    ) as FormArray;
    this.rawMaterial.push(this.createrawMaterial());
  }
  removeSalt(i: number) {
    this.rawMaterial.removeAt(i);
  }
  get saltControls() {
    return this.manufacturedrugsForm.get("rawMaterial")["controls"];
  }
  onSubmit() {
    console.log("Entry is made");
    this.manufacturedrugsForm.reset();
    this.router.navigate(["/dashboard"]);
  }
}
