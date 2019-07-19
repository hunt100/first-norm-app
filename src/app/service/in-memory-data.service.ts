// import { Injectable } from '@angular/core';
// import {InMemoryDbService} from 'angular-in-memory-web-api';
// import { Item } from '../model/item';

// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService implements InMemoryDbService {
//   createDb(){
//    const items = [
//     {id: 11, itemName: 'Staff', itemDescription: 'Create some wizard spells', itemPrice: 20},
//     {id: 12, itemName: 'Sword', itemDescription: 'good in destroying monsters', itemPrice: 55.2},
//     {id: 13, itemName: 'Health potion', itemDescription: 'If you need healing', itemPrice: 12.5},
//     {id: 14, itemName: 'Pickaxe', itemDescription: 'Provide additional materials', itemPrice: 5.8},
//     {id: 15, itemName: 'Helmet', itemDescription: 'Defend your head', itemPrice: 37.35}
//    ];
//    return {items};
//   }

//   genId(items: Item[]): number {
//     return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;    
//   }
// }
