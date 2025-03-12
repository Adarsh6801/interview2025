import { Component } from '@angular/core';
import { CV } from '../../interfaces/cv.interface';

@Component({
  selector: 'app-cv-list',
  imports: [],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.scss'
})
export class CvListComponent {
  cvList:CV[]=[]
  page=1;
  pageSize=10;
  totalItems=0;
}
