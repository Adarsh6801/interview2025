import { Routes } from '@angular/router';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'cv/list',component:CvListComponent},
    {path:'cv/add',component:CvFormComponent}
];
