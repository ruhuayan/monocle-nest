import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MonocleService } from './monocle.service';
import { HttpClientModule } from '@angular/common/http';
import { StagesModule } from './stages/stages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, FormsModule, HttpClientModule, StagesModule
  ],
  providers: [MonocleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
