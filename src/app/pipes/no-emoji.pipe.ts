import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noEmoji'
})
export class NoEmojiPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
