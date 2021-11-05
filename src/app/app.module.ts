import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { NewTrainingComponent } from './trainings/new-training/new-training.component';
import { CurrentTrainingComponent } from './trainings/current-training/current-training.component';
import { CompletedTrainingComponent } from './trainings/completed-training/completed-training.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    TrainingsComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    CompletedTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [MaterialImportsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
