import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'stages',
    loadChildren: './stages/stages.module#StagesModule'
  },
  {
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	}, {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
