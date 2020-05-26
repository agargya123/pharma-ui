import { Component, OnInit } from "@angular/core";
import { ParticipantService } from "../services/participant.service";
import { Supplier } from "../shared/supplier";
import { SaltBatch } from "../shared/saltBatch";

@Component({
  selector: "app-salt-list",
  templateUrl: "./salt-list.component.html",
  styleUrls: ["./salt-list.component.scss"],
})
export class SaltListComponent implements OnInit {
  supplier: Supplier;
  listOfRawMaterial: SaltBatch[];
  constructor(private participantService: ParticipantService) {
    participantService
      .getSaltBatchesDetails(
        localStorage.getItem("username"),
        localStorage.getItem("role")
      )
      .subscribe(
        (data) => {
          this.supplier = data;
          this.listOfRawMaterial = this.supplier._rawMaterialAvailable;
        },
        (error) => {}
      );
  }

  ngOnInit() {}
}
