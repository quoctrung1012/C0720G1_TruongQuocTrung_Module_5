import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontSizeComponent} from './bai_03_anguler_overview/practice/front-size/front-size.component';
import {PetComponent} from './bai_03_anguler_overview/practice/pet/pet.component';
import {HackerNewsComponent} from './bai_04_angular_component_and_template/practice/hacker-news/hacker-news.component';
import {LikesComponent} from './bai_04_angular_component_and_template/practice/hacker-news/likes/likes.component';
import {CalculatorComponent} from './bai_03_anguler_overview/exercise/calculator/calculator.component';
import {ColorPickerComponent} from './bai_03_anguler_overview/exercise/color-picker/color-picker.component';
import {NameCardComponent} from './bai_05_components_interaction/practice/name-card/name-card.component';
import {ProgressBarComponent} from './bai_05_components_interaction/practice/progress-bar/progress-bar.component';
import {TodoComponent} from './bai_06_anglar_forms/practice/todo/todo.component';
import {LoginComponent} from './bai_06_anglar_forms/exercise/login/login.component';
import {RegisterFinalComponent} from './bai_06_anglar_forms/exercise/register-final/register-final.component';


const routes: Routes = [
  {path: 'front-size', component: FrontSizeComponent},
  {path: 'pet', component: PetComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color-picker', component: ColorPickerComponent},
  {path: 'hacker-new-v01', component: HackerNewsComponent},
  {path: 'likes', component: LikesComponent},
  {path: 'name-card', component: NameCardComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-final', component: RegisterFinalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
