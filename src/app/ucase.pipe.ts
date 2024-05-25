import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucase'
})
export class UcasePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): unknown {
    return value?.toUpperCase();
  }

}
