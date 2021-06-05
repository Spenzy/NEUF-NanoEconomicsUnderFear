import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePage } from './store.page';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: StorePage
  },
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      {
        path: ':productId',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
