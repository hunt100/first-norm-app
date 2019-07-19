import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  selectedItem: Item;
  @Input()itemId: number;
  @Output() newToggleEvent = new EventEmitter<boolean>();
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItem();
  }

  changeToggleBehave(value: boolean) {
    this.newToggleEvent.emit(value);
    this.selectedItem = undefined;
  }

  getItem():void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = this.itemId;
    this.itemService.getItemById(id).subscribe(item => this.selectedItem = item);
  }

  save():void {
    this.itemService.updateItem(this.selectedItem).subscribe(() => this.changeToggleBehave(false));
  }

  goBack():void {
    this.location.back();
  }
}
