import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketplacePage } from './marketplace.page';
import {ProductComponent} from '../product/product.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplacePage
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplacePageRoutingModule {}
