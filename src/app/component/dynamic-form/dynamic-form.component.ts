import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from 'src/app/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/service/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payload = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
   
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
  }

}
