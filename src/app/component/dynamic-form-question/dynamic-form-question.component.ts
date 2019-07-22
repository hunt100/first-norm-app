import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { 
  
    console.log(this.form.controls);
    return this.form.controls[this.question.key].valid; 
  
  }



  constructor() { }

  ngOnInit() {
  }

}
