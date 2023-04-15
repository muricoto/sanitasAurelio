import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    const term = searchTerm.toLowerCase();
    return items.filter(item =>
      item.id.toString().toLowerCase().includes(term) ||
      item.text.toLowerCase().includes(term)
    );
  }
}