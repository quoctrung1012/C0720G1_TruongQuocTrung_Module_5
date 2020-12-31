import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontSizeComponent } from './bai_03_anguler_overview/practice/front-size/front-size.component';
import { PetComponent } from './bai_03_anguler_overview/practice/pet/pet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddBoostrapsComponent } from './bai_03_anguler_overview/practice/add-boostraps/add-boostraps.component';
import {CalculatorComponent} from './bai_03_anguler_overview/exercise/calculator/calculator.component';
import { ColorPickerComponent } from './bai_03_anguler_overview/exercise/color-picker/color-picker.component';
import { HackerNewsComponent } from './bai_04_angular_component_and_template/practice/hacker-news/hacker-news.component';
import { LikesComponent } from './bai_04_angular_component_and_template/practice/hacker-news/likes/likes.component';
import { HackerNewV2Component } from './bai_04_angular_component_and_template/exercise/hacker-new-v2/hacker-new-v2.component';
import { NameCardComponent } from './bai_05_components_interaction/practice/name-card/name-card.component';
import { ProgressBarComponent } from './bai_05_components_interaction/practice/progress-bar/progress-bar.component';
import { CountdownTimerComponent } from './bai_05_components_interaction/exercise/app-vote/countdown-timer/countdown-timer.component';
import { CountdownTimerAliasComponent } from './bai_05_components_interaction/exercise/app-vote/countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerEventAliasComponent } from './bai_05_components_interaction/exercise/app-vote/countdown-timer-event-alias/countdown-timer-event-alias.component';
import { CountdownTimerEventComponent } from './bai_05_components_interaction/exercise/app-vote/countdown-timer-event/countdown-timer-event.component';
import { CountdownTimerGetSetComponent } from './bai_05_components_interaction/exercise/app-vote/countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './bai_05_components_interaction/exercise/app-vote/countdown-timer-onchanges/countdown-timer-onchanges.component';
import { RatingBarComponent } from './bai_05_components_interaction/exercise/app-vote/rating-bar/rating-bar.component';
import { TodoComponent } from './bai_06_anglar_forms/practice/todo/todo.component';
import { LoginComponent } from './bai_06_anglar_forms/exercise/login/login.component';
import { RegisterFinalComponent } from './bai_06_anglar_forms/exercise/register-final/register-final.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontSizeComponent,
    PetComponent,
    AddBoostrapsComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HackerNewsComponent,
    LikesComponent,
    HackerNewV2Component,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    RatingBarComponent,
    TodoComponent,
    LoginComponent,
    RegisterFinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
