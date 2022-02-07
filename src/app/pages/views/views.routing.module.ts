import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { OauthGuard } from 'src/app/core/guards/oauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'access'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    //canActivate: [OauthGuard]
  },{
      path: 'access',
      loadChildren: () => import('./access/access.module').then((m) => m.AccessModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }