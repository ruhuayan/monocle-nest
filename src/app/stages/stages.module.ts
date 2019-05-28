import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StagesComponent } from './stages.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@NgModule({
imports: [
  CommonModule,
  RouterModule.forChild([
    {
      path: '',
      component: StagesComponent
    }
  ])
],
providers: [],
declarations: [StagesComponent, LeftMenuComponent]
})
export class StagesModule {}
