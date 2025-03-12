import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cv-preview',
  imports: [CommonModule],
  templateUrl: './cv-preview.component.html',
  styleUrl: './cv-preview.component.scss'
})
export class CvPreviewComponent implements OnInit {
  @Input() cvForm!:FormGroup;
  ngOnInit(): void {
   console.log(this.cvForm,'cv formmmmmm');
   
  }
}
