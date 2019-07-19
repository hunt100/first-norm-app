import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/public_api';
import { GithubUserService } from 'src/app/service/github-user.service';
import { GithubUser } from 'src/app/model/github-user';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  //items = [];
  //showArray: any[];
  githubUsers: GithubUser[];
  pageSize:number = 20;
  showBoundaryLinks: boolean = true;
  totalItems = 200;

  constructor(private githubService: GithubUserService) { }

  ngOnInit() {
    //this.items = Array(150).fill(0).map((x,i) => ({ id: (i+1), name: `Item ${i+1}`}));
    //this.showArray = this.items.slice(0, 20);
    this.getGithubUsers(20);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    //this.showArray = this.items.slice(startItem, endItem);
    this.getGithubUsers(startItem+endItem);
  }

  getGithubUsers(since: number) {
    this.githubService.getAllUsers(since).subscribe(user => this.githubUsers = user);
  }


}
