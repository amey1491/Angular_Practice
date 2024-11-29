import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true,
})
export class DemoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]) {
    var str;
    if (args[0] == 'PPA') {
      return (str = value + 'PPA Selected');
    } else if (args[1] == 'LB Selected') {
      return (str = value + 'LB Selected');
    } else if (args[2] == 'Angular') {
      return (str = value + 'Angular Selected');
    }else{
      return (str = 'we dont have that batch');
    }
  }
}
