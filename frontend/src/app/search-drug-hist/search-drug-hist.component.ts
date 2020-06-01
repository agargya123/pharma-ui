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
  type: boolean;

  typeMap = {
    false: "Drug Batch ID",
    true: "Drug ID",
  };
  constructor() {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.drugHistoryForm = new FormGroup({
      drugBatchId: new FormControl("", Validators.required),
      type: new FormControl(false),
    });
  }

  OnSubmit() {
    console.log(this.drugHistoryForm.value);
    this.drugBatchId = this.drugHistoryForm.get("drugBatchId").value;
    this.type = this.drugHistoryForm.get("type").value;
  }
}
