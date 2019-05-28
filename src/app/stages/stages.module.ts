import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PointsComponent } from './points.component';
import { RouterModule } from '@angular/router';
import { StagesComponent } from './stages.component';

@NgModule({
imports: [
  CommonModule,
  RouterModule.forChild([
    {
      path: '',
      component:
    }
  ])
],
providers: [],
declarations: [StagesComponent]
})
export class StagesModule {}
