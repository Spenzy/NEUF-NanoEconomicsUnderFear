import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AdminPageRoutingModule,
        MatIconModule,
        MatTableModule,
        MatButtonModule
    ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
