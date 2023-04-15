import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainPageComponent } from './main-page.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [CommonModule,IonicModule, NgxPaginationModule],
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
})
export class MainPageComponentModule {}