import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontSizeComponent } from './bai_03_anguler_overview/practice/front-size/front-size.component';
import { PetComponent } from './bai_03_anguler_overview/practice/pet/pet.component';
import {FormsModule} from '@angular/forms';
import { AddBoostrapsComponent } from './bai_03_anguler_overview/practice/add-boostraps/add-boostraps.component';
import {CalculatorComponent} from './bai_03_anguler_overview/exercise/calculator/calculator.component';
import { ColorPickerComponent } from './bai_03_anguler_overview/exercise/color-picker/color-picker.component';
import { HackerNewsComponent } from './bai_04_angular_component_and_template/practice/hacker-news/hacker-news.component';
import { LikesComponent } from './bai_04_angular_component_and_template/practice/hacker-news/likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontSizeComponent,
    PetComponent,
    AddBoostrapsComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HackerNewsComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
