import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showChar',
  standalone: false
})
export class ShowCharPipe implements PipeTransform {

  transform(value: string, togglePipe: boolean): string {
    if(value.length > 100 && togglePipe ) {
      return value.substring(0, 100) + '...';
    } 

    return value;
  }
}
