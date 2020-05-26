import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { BlockchainService } from "../services/blockchain.service";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent implements OnChanges {
  constructor(private blockchainService: BlockchainService) {}
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = "left";
  entries: any;
  @Input()
  drugBatchId: string;

  ngOnChanges() {
    this.blockchainService.getDrugBatchHistory(this.drugBatchId).subscribe(
      (data) => (this.entries = data),
      (error) => console.log(error)
    );
  }

  addEntry() {
    this.entries.push({
      stage: "Supplier",
      organisationName: "MD labs and Chemicals",
      address: "112, Building 14, Sector 56-C, Noida",
      licenseNo: "66770F",
      dateDispatched: "09-05-20",
    });
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  toggleSide() {
    this.side = this.side === "left" ? "right" : "left";
  }
}
