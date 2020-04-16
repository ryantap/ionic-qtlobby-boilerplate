import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})

/**
 * NOTE: This is used to sanitize urls
 */
export class SafePipe implements PipeTransform {

  constructor( private dom : DomSanitizer) {}

  transform(value: any, ...args: any[]): any {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
