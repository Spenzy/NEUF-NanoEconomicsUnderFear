import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    _MatMenuDirectivesModule,
    MatMenuModule
  ],
  declarations: [StorePage, ProductListComponent, ProductComponent]
})
export class StorePageModule {}
