import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLenght'
})
export class MaxLenghtPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}