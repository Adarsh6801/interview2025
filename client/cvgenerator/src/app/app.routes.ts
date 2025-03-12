import { Routes } from '@angular/router';
import { CvListComponent } from './components/cv-list/cv-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'cv/list',component:CvListComponent}
];
