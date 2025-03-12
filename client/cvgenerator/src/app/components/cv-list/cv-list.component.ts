import { Component } from '@angular/core';
import { CV } from '../../interfaces/cv.interface';
import { CvService } from '../../services/cv.service';

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
  constructor(private cvService:CvService){

  }

  loadCvs(){
    this.cvService.getCvs(this.page, this.pageSize).subscribe({
      next:(response)=>{
        this.cvList=response.data;
        this.totalItems=response.total;
      }
    })
  }
}
