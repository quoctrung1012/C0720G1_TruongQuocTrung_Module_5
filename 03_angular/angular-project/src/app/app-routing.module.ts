import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontSizeComponent} from './bai_03_anguler_overview/practice/front-size/front-size.component';
import {PetComponent} from './bai_03_anguler_overview/practice/pet/pet.component';
import {HackerNewsComponent} from './bai_04_angular_component_and_template/practice/hacker-news/hacker-news.component';
import {LikesComponent} from './bai_04_angular_component_and_template/practice/hacker-news/likes/likes.component';
import {CalculatorComponent} from './bai_03_anguler_overview/exercise/calculator/calculator.component';
import {ColorPickerComponent} from './bai_03_anguler_overview/exercise/color-picker/color-picker.component';


const routes: Routes = [
  {path: 'front-size', component: FrontSizeComponent},
  {path: 'pet', component: PetComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color-picker', component: ColorPickerComponent},
  {path: 'hacker-new-v01', component: HackerNewsComponent},
  {path: 'likes', component: LikesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
