import { Injectable } from '@angular/core';
import { QuestionBase } from '../dynamic-form-class/question-base';
import {QuestionDropdown} from '../dynamic-form-class/question-dropdown';
import { QuestionTextbox } from '../dynamic-form-class/question-textbox';

@Injectable()
export class QuestionService {

  getQuestions(){
    let questions: QuestionBase<any>[] = [
      new QuestionDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options:[
        {key: 'solid', value: 'Solid'},
        {key: 'great', value: 'Great!'},
        {key: 'good', value: 'Good'}
        ],
        order: 3
      }),
      new QuestionTextbox({
        key: 'firstname',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new QuestionTextbox({
        key: 'email',
        label: 'Email address',
        type: 'email',
        order: 2
      })
    ];
    
    return questions.sort((a,b) => a.order - b.order);
  }

  constructor() { }
}
