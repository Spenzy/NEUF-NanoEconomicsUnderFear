import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TrackerService} from '../../services/tracker.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminPage implements OnInit {
  dataSource: any;
  columnsToDisplay = ['userID', 'DASS21_SCORES', 'sessionDetails'];
  expandedElement: any | null;

  constructor(private trackerService: TrackerService) { }

  ngOnInit() {
    this.trackerService.getAllSessions().subscribe(
      data => this.dataSource = data,
      error => console.log(error)
    );
    console.log(this.dataSource);
  }

  getSessionId(id){
    this.trackerService.getSession(id);
  }
}
