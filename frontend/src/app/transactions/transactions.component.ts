import { Component, OnInit } from "@angular/core";
import { ParticipantService } from "../services/participant.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  listOfTransactions: any;
  errorMessage: string;

  constructor(private participantService: ParticipantService) {
    this.participantService.getAllTransactions().subscribe(
      (data) => {
        this.listOfTransactions = data;
      },
      (error) => {
        this.errorMessage = "Not Authorized to view this";
      }
    );
  }

  isLast(index): boolean {
    console.log(index);

    return index != this.listOfTransactions.length;
  }

  ngOnInit() {}
}
