import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PicsumPhotosComponent } from './core/components/picsum-photos/picsum-photos.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/main', pathMatch: 'full' ,
  },
  {
    path: 'main' , component: PicsumPhotosComponent,
    loadChildren: () => import('./core/components/picsum-photos/picsum-photos.module').then(m => m.PicsumPhotosComponentModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
