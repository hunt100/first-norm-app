import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NpmPackageInfo } from 'src/app/model/npm-package-info';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-package-service',
  templateUrl: './package-service.component.html',
  styles: []
})
export class PackageServiceComponent implements OnInit {
  withRefresh: boolean = false;
  packages$: Observable<NpmPackageInfo[]>;
  private searchText$ = new Subject<string>();

  search(packageName: string) {
    this.searchText$.next(packageName);
  }

  toggleRefresh() { this.withRefresh = ! this.withRefresh; }

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.packages$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(packageName => this.searchService.search(packageName, this.withRefresh))
    )
  }

}
