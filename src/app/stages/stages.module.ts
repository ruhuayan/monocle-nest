import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StagesComponent } from './stages.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { SocketService } from './socket.service';

// const config = { url: 'http://35.203.32.30:8000', options: {} };
@NgModule({
imports: [
  CommonModule,
  RouterModule.forChild([
    {
      path: '',
      component: StagesComponent,
      // canActivate: [AuthGuard]
    }
  ]),
  // SocketIoModule.forRoot(config)
],
providers: [AuthGuard, RoleGuard, SocketService],
declarations: [StagesComponent, LeftMenuComponent]
})

export class StagesModule {}
