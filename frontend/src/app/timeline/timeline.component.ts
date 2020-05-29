import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { BlockchainService } from "../services/blockchain.service";
import { not } from "@angular/compiler/src/output/output_ast";

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
  notFound: boolean = false;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = "left";
  entries: any;
  stages: any = [
    "Manufacturing Medicine",
    "Shipping Products to Distributor",
    "Shipping Products to Pharmacist",
    "Purchasing the Medicine",
  ];

  @Input()
  drugBatchId: string;

  ngOnChanges() {
    this.notFound = false;
    this.entries = null;
    this.blockchainService.getDrugBatchHistory(this.drugBatchId).subscribe(
      (data) => {
        this.entries = data;
        console.log(this.entries);
        if (this.entries == null) this.notFound = true;
      },
      (error) => {
        this.notFound = true;
        console.log(error);
      }
    );
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
    // console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  toggleSide() {
    this.side = this.side === "left" ? "right" : "left";
  }
}
