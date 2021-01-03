import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
import {TimeLiveComponent} from './bai_07_service_and_router/practice/time-live/time-live.component';
import {YoutubePlaylistComponent} from './bai_07_service_and_router/practice/youtube/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './bai_07_service_and_router/practice/youtube/youtube-player/youtube-player.component';
import {DictionaryPageComponent} from './bai_07_service_and_router/exercise/dictionary/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './bai_07_service_and_router/exercise/dictionary/dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './bai_07_service_and_router/exercise/dictionary-util/auth.guard';
import { CasesComponent } from './exam/cases/cases.component';
import { AddCasesComponent } from './exam/add-cases/add-cases.component';
import { EditCasesComponent } from './exam/edit-cases/edit-cases.component';
import { CasesStatComponent } from './exam/cases-stat/cases-stat.component';
import { CasesDetailsComponent } from './exam/cases-details/cases-details.component';


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
  {path: 'register-final', component: RegisterFinalComponent},
  {path: 'time-live', component: TimeLiveComponent},
  {path: 'youtube', component: YoutubePlaylistComponent, children: [{path: ':id', component: YoutubePlayerComponent}]},
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [{path: ':key', component: DictionaryDetailComponent, canActivate: [AuthGuard]}]
  },

  {
    path: 'cases',
    component: CasesComponent,
    data: { title: 'List of cases' }
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: { title: 'Add Case' }
  },
  {
    path: 'edit-cases/:id',
    component: EditCasesComponent,
    data: { title: 'Edit Case' }
  },
  {
    path: 'cases-stat',
    component: CasesStatComponent,
    data: { title: 'Cases Statistic' }
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: { title: 'Case Details' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
