import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/components/main-page/main-page.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/main', pathMatch: 'full' ,
  },
  {
    path: 'main' , component: MainPageComponent,
    loadChildren: () => import('./core/components/main-page/main-page.module').then(m => m.MainPageComponentModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
