import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [ CommonModule,IonicModule,],
  declarations: [MainPageComponent],
  exports: [MainPageComponent]
})
export class MainPageComponentModule {}
