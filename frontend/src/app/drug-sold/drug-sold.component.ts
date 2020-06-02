import { Component, OnInit } from "@angular/core";
import { BlockchainService } from "../services/blockchain.service";

@Component({
  selector: "app-drug-sold",
  templateUrl: "./drug-sold.component.html",
  styleUrls: ["./drug-sold.component.scss"],
})
export class DrugSoldComponent implements OnInit {
  listOfAllDrugs: any[];
  errorMessage: string;
  constructor(private blockchainService: BlockchainService) {
    this.blockchainService.getAllDrugs().subscribe(
      (data) => {
        this.listOfAllDrugs = data;
      },
      (error) => {
        this.errorMessage = "Not Authorized to view this";
      }
    );
  }

  ngOnInit() {}
}
