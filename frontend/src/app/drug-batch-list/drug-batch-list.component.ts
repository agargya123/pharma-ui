import { Component, OnInit, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material";
import { ParticipantService } from "../services/participant.service";
import { DrugBatch } from "../shared/drugBatch";

@Component({
  selector: "app-drug-batch-list",
  templateUrl: "./drug-batch-list.component.html",
  styleUrls: ["./drug-batch-list.component.scss"],
})
export class DrugBatchListComponent implements OnInit {
  listOfDrugBatch: DrugBatch[];
  username: string;
  role: string;
  errorMessage: string;
  stages:any=["Manufacturing","From Manufacturer to Distributor","From Distributor to Pharmacist","Pharmacist"];

  constructor(private participantService: ParticipantService) {
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role");
    this.participantService
      .getDrugBatchesDetails(this.username, this.role)
      .subscribe(
        (data) => {
          this.listOfDrugBatch = data;
        },
        (error) => {
          this.errorMessage = "Not Authorized to view this";
        }
      );
  }

  ngOnInit() {}
}
