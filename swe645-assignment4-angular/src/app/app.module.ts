// Neal MacDonald G01106606
// Tushar Iyer G01118318
// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component and Service imports
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';

// 3rd party imports
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

const appRoutes: Routes = [
  { path: 'survey', component: SurveyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    TabViewModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
