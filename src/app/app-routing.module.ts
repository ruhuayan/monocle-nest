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
  // {
  //   path: 'jukebox',
  //   loadChildren: './pages/jukebox/jukebox.module#JukeboxModule'
  // }, {
  //   path: 'igame',
  //   loadChildren: './pages/imagegame/imagegame.module#ImagegameModule'
  // }, {
	// 	path: 'points',
  //   loadChildren: './pages/points/points.module#PointsModule'
  // }, {
	// 	path: 'blackjack',
  //   loadChildren: './pages/blackjack/blackjack.module#BlackjackModule'
  // }, {
  //   path: 'solitaire',
  //   loadChildren: './pages/solitaire/solitaire.module#SolitaireModule'
  // },{
  //   path: 'balls',
  //   loadChildren: './pages/ball/ball.module#BallModule'
  // },
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
