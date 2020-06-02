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
  drugDetails: any;

  stages: any = [
    "Shipping Raw Material",
    "Manufacturing Medicine",
    "Shipping Products to Distributor",
    "Shipping Products to Pharmacist",
    "Purchasing the Medicine",
  ];

  @Input()
  drugBatchId: string;

  @Input()
  type: boolean;

  ngOnChanges() {
    this.notFound = false;
    this.entries = null;
    this.drugDetails = null;

    if (this.type == false)
      this.blockchainService.getDrugBatchHistory(this.drugBatchId).subscribe(
        (data) => {
          console.log(data[0].value._type);

          if (!data || data[0].value._type != "io.pharmachain.drugBatch")
            this.notFound = true;
          else this.entries = data;
        },
        (error) => {
          this.notFound = true;
          console.log(error);
        }
      );
    else {
      this.blockchainService.getDrugByID(this.drugBatchId).subscribe(
        (data) => {
          if (data && data._type === "io.pharmachain.drug") {
            this.drugDetails = data;
            this.blockchainService
              .getDrugBatchHistory(data._batch.id)
              .subscribe(
                (entriesData) => {
                  this.entries = entriesData;
                  console.table(this.entries);

                  if (!data || !this.entries) this.notFound = true;
                },
                (error) => {
                  this.notFound = true;
                  console.log(error);
                }
              );
          } else this.notFound = true;
        },
        (error) => {
          this.notFound = true;
          console.log(error);
        }
      );
    }
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
