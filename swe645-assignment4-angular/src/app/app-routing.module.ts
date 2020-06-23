// Neal MacDonald G01106606
// Tushar Iyer G01118318
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: '',
    component: SurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [SurveyComponent];
