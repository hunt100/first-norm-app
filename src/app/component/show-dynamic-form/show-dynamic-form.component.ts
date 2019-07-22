import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-show-dynamic-form',
  templateUrl: './show-dynamic-form.component.html',
  providers: [QuestionService]
})
export class ShowDynamicFormComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
   }
  ngOnInit() {
  }

}
