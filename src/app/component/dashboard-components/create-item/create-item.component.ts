import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  @Input() response: any;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  createItem(itemName: string, itemDescription: string, itemPrice: number) {
    this.itemService.createItem({itemName, itemDescription, itemPrice} as Item)
        .subscribe(item => {
          this.response.push(item);
          console.log(item);
        });
  }

}
