import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StagesComponent } from './stages.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
@NgModule({
imports: [
  CommonModule,
  RouterModule.forChild([
    {
      path: '',
      component: StagesComponent,
      canActivate: [AuthGuard]
    }
  ])
],
providers: [AuthGuard, RoleGuard],
declarations: [StagesComponent, LeftMenuComponent]
})
export class StagesModule {}
