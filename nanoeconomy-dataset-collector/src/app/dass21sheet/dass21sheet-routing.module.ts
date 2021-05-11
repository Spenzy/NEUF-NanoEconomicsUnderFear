import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Dass21sheetComponent} from './dass21sheet.component';

const routes: Routes = [
  {
    path: '',
    component: Dass21sheetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dass21sheetRoutingModule { }
