import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/date.service';
import { MyDate } from 'src/app/model/mydate';

@Component({
  selector: 'app-date-search',
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.css']
})
export class DateSearchComponent implements OnInit {
  response: any[];
  searchDate: MyDate;
  bsValue = new Date();
  disabledDates = [
    new Date('2019-02-05'), //???
    new Date('2019-02-09'),
    6,                      //Days of the week
    0
  ];
  bsConfig = {
    dateInputFormat: 'DD-MM-YYYY', //YYYY-MM-DD ;; MM/DD/YYYY ;; MMMM Do YYYY,h:mm:ss a
    isAnimated: true,
    containerClass: 'theme-dark-blue'
  }
  constructor(private dateService: DateService) { }

  getAllDates() {
    this.dateService.getAllDates().subscribe(response => {
      this.response = response;
      console.log(this.response);
    })
  }

  getDateByDate(date:string) {
    console.log(date);
    this.dateService.getDateByDate(date).subscribe(date => {
      this.searchDate = date[0];
      console.log('s', date, this.searchDate);
    });
  }

  check(date:string) {
    this.getDateByDate(date);
    console.log(this.searchDate);
  }

  ngOnInit() {
  }

}
