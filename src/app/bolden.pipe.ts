import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bolden'
})
export class BoldenPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
     transform(value: string): any {
      return value.toUpperCase();
    }
  
  }
  


