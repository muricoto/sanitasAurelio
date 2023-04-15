import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainPageComponent } from './main-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,IonicModule, NgxPaginationModule, FormsModule],
  declarations: [MainPageComponent, FilterPipe],
  exports: [MainPageComponent],
})
export class MainPageComponentModule {}