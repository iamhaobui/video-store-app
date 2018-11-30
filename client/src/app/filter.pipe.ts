import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      // return it.filter( res => {
      //   return res.toLowerCase().includes(searchText);
      // });
      // for (let object in it) {
      //   return it[object].toLowerCase().includes(searchText);
      // }
      return it['title'].toLowerCase().includes(searchText);
    });
   }
}
