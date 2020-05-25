import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent  {
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  entries = [
    {
      //does DB have any way to distinguish bw Supplier?Manu. etc 
      stage : 'Supplier',
      organisationName: 'MD labs and Chemicals',
      address : '112, Building 14, Sector 56-C, Noida',
      licenseNo : '66770F',
      dateDispatched : '09-05-20',
      //dateRecieved?
    },

    {
      stage : 'Manufacturer',
      organisationName: 'Ranbaxy Pharmaceuticals Pvt. Ltd.',
      address : 'Building 23, Raheja Medical Complex, Manesar',
      licenseNo : 'FFR2783',
      dateDispatched : '11-05-20',
    }
    
  ]

  addEntry() {
    this.entries.push({
      stage : 'Supplier',
      organisationName: 'MD labs and Chemicals',
      address : '112, Building 14, Sector 56-C, Noida',
      licenseNo : '66770F',
      dateDispatched : '09-05-20',
    })
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
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
}
