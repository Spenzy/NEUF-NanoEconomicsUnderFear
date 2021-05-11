import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Dass21sheetComponent} from '../dass21sheet.component';
import {TrackerService} from '../../services/tracker.service';

export interface DialogData {
  scores: any;
  user: any;
}

@Component({
  selector: 'app-resultmodal',
  templateUrl: './resultmodal.component.html',
  styleUrls: ['./resultmodal.component.scss'],
})
export class ResultmodalComponent implements OnInit {
  session: any;

  constructor(public dialogRef: MatDialogRef<Dass21sheetComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private trackerService: TrackerService) {

  }

  OnClick(message, reached?, nbr?) {
    this.trackerService.timeStamp(message, reached, nbr);
    this.session = this.trackerService.session.value;
  }

  finishSession(){
    this.trackerService.endSession();
    this.session = this.trackerService.session.value;
  }

  ngOnInit() {
    this.session = this.trackerService.session.value;
  }

}
