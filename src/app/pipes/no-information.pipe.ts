import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noInformation'
})
export class NoInformationPipe implements PipeTransform {

  transform(value: any, type: string = 'string'): any {
    if (type === 'number' && parseInt(value) === 0) {
      return 'No Information';
    }
    return value ? value : 'No Information';
  }

}
