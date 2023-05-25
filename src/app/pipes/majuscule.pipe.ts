import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majuscule'
})
export class MajusculePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log("appelé")
    return value.toUpperCase();
  }



}
