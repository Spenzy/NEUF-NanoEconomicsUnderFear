import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    items: MenuItem[];

    ngOnInit() {
      this.items = [
        {
          label: 'Tab1',
          icon: '',
          items: [
            {
              label: 'category1',
              icon: '',
              items: [
                {
                  label: 'sub1',
                  icon: ''
                },
                {
                  label: 'sub2',
                  icon: ''
                },

              ]
            },
            {
              label: 'category2',
              icon: ''
            },
            {
              separator: true
            },
            {
              label: 'category3',
              icon: ''
            }
          ]
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus',

            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus',

            },
            {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter'
                },
                {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List'
                }
              ]
            }
          ]
        }
      ];
    }

}
