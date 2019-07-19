import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
                <div class="container mx-auto">
                <h1 class="display-3">This page is not found or unavailable now for some reasons.</h1>
                </div>
                `,
  styleUrls: []
})
export class NotFoundComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
