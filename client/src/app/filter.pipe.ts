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
      if (it['title'] == null) {
        return it['fname'].toLowerCase().includes(searchText)
                || it['lname'].toLowerCase().includes(searchText)
                || it['address'].toLowerCase().includes(searchText)
                || it['city'].toLowerCase().includes(searchText)
                || it['status'].toLowerCase().includes(searchText)
                || it['phone'].toLowerCase().includes(searchText);
      }
      return it['title'].toLowerCase().includes(searchText)
              || it['genre'].toLowerCase().includes(searchText)
              || it['director'].toLowerCase().includes(searchText)
              || it['rating'].toLowerCase().includes(searchText)
              || it['status'].toLowerCase().includes(searchText)
              || it['runningTime'].toLowerCase().includes(searchText);
    });
  }
}
