import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScrollToModule} from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ScrollListenerDirective } from './listeners/scroll.directive';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'resume', component: ResumeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    NavbarComponent,
    ScrollListenerDirective,
    HomeComponent,
    ProjectsComponent,
    HobbiesComponent,
    ResumeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
