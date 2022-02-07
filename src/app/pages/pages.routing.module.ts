import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
const routes: Routes = [
  { 
      path: '', 
      component: PagesComponent,
      children: [
          { path: '', redirectTo: 'pages', pathMatch: 'full'},
          {
              path: 'pages',
              loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule)
          }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }