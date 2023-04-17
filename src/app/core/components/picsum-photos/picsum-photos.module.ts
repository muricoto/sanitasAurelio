import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PicsumPhotosComponent } from './picsum-photos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,IonicModule, NgxPaginationModule, FormsModule],
  declarations: [PicsumPhotosComponent, FilterPipe],
  exports: [PicsumPhotosComponent],
})
export class PicsumPhotosComponentModule {}