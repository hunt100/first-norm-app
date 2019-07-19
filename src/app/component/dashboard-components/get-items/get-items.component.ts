import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.css']
})
export class GetItemsComponent implements OnInit {
  @Input()response: any;
  toggler: boolean = false;
  itemId: number = 0;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }
  
  delete(item: Item) {
    this.response = this.response.filter(h => h !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }

  toggleItem(itemId:number):void {
    this.toggler = !this.toggler;
    this.itemId = itemId;
  }

  getAllItems() {
    this.itemService.getAllItems()
        .subscribe(
          (response)=> {
            this.response = response;
            console.log(this.response);
          });
  }

  changeToggleBehaveByChild(value: boolean) {
    this.toggler = value;
    console.log(value);
  }
}
