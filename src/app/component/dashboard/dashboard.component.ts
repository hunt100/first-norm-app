import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  searchItems: Item[];
  static itemChange(item, itemComponent): void {
    console.info('item changed', item, itemComponent);
  }

  static itemResize(item, itemComponent): void {
    console.info('item resized', item, itemComponent);
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize
    };

    this.dashboard = [
      // {cols: 1, rows: 1, x: 0, y: 0},
      // {cols: 1, rows: 1, x: 1, y: 1}
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  arr = [];
  innerComponent: string = 'component'; 
  addItem(innerComponent: string) {
    this.arr.push(this.innerComponent);
    console.log(this.arr);
    this.dashboard.push({rows: 1, cols: 1, x: 0, y:0, inn: this.innerComponent});
  }

  changeRef(innerComponent: string) {
    this.innerComponent = innerComponent;
  }

  response: any[];

  getAllItems() {
    this.itemService.getAllItems()
        .subscribe(
          (response)=> {
            this.response = response;
            console.log(this.response);
          });
  }

    search(searchTerm: string) {
      if (searchTerm) {
        this.itemService.searchItem(searchTerm).subscribe( seitem => this.searchItems = seitem);
      }
    }

  



}
