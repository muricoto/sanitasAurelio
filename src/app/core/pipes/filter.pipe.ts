import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], search: string): any[] {
    if (!items || !search) {
      return items;
    }
    const term = search.toLowerCase();
    return items.filter(item =>
      item.id.toString().toLowerCase().includes(term) ||
      item.text.toLowerCase().includes(term)
    );
  }
}