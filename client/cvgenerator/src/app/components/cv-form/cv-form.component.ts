import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { CvPreviewComponent } from '../cv-preview/cv-preview.component';
@Component({
  selector: 'app-cv-form',
  imports: [ReactiveFormsModule,CommonModule,CvPreviewComponent],
  templateUrl: './cv-form.component.html',
  styleUrl: './cv-form.component.scss'
})
export class CvFormComponent {
  cvForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.cvForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      summary:['',Validators.required],
      experience:this.fb.array([]),
      education:this.fb.array([]),
      skills:this.fb.array([this.fb.control('',Validators.required)])
    })
  }

  get experience(){return this.cvForm.get('experience') as FormArray}
  get education(){return this.cvForm.get('education') as FormArray}
  get skills(){return this.cvForm.get('skills') as FormArray}

  onSubmit(){

  }
  removeExperience(index:number){
    this.experience.removeAt(index)
  }
  addExperience(){
    const experienceGroup=this.fb.group({
      company:['',Validators.required],
      role:['',Validators.required],
      start_date:['',Validators.required],
      end_date:['',Validators.required]

    })
    this.experience.push(experienceGroup)
  }
  removeEducation(index:number){
    this.education.removeAt(index)
  }
  addEducation(){
    const educationGroup=this.fb.group({
      institution:['',Validators.required],
      degree:['',Validators.required],
      year:['',Validators.required],

    })
    this.education.push(educationGroup)
  }
  removeSkill(index:number){
    this.skills.removeAt(index)

  }
  addSkill(){
    this.skills.push(this.fb.control('',Validators.required))
  }
}
