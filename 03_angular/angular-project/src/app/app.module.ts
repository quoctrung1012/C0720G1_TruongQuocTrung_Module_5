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
import { TimeLiveComponent } from './bai_07_service_and_router/practice/time-live/time-live.component';
import { YoutubePlaylistComponent } from './bai_07_service_and_router/practice/youtube/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './bai_07_service_and_router/practice/youtube/youtube-player/youtube-player.component';
import { HomeComponent } from './bai_07_service_and_router/exercise/dictionary/home/home.component';
import { DictionaryComponent } from './bai_07_service_and_router/exercise/dictionary/dictionary/dictionary.component';
import { DictionaryPageComponent } from './bai_07_service_and_router/exercise/dictionary/dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './bai_07_service_and_router/exercise/dictionary/dictionary-detail/dictionary-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CasesComponent } from './exam/cases/cases.component';
import { CasesDetailsComponent } from './exam/cases-details/cases-details.component';
import { EditCasesComponent } from './exam/edit-cases/edit-cases.component';
import { CasesStatComponent } from './exam/cases-stat/cases-stat.component';
import { AddCasesComponent } from './exam/add-cases/add-cases.component';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';

// import {ChartsModule} from 'ng2-charts';

// @ts-ignore
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
    TimeLiveComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    HomeComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    CasesComponent,
    CasesDetailsComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
