import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search-drug-hist",
  templateUrl: "./search-drug-hist.component.html",
  styleUrls: ["./search-drug-hist.component.scss"],
})
export class SearchDrugHistComponent implements OnInit {
  drugHistoryForm: FormGroup;
  drugBatchId: string;
  notfound: boolean;
  constructor() {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.drugHistoryForm = new FormGroup({
      drugBatchId: new FormControl("", Validators.required),
    });
  }

  OnSubmit() {
    this.drugBatchId = this.drugHistoryForm.get("drugBatchId").value;
    if(this.drugBatchId)
      this.notfound=false;

  }
}
