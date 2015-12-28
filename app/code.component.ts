import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
    selector: '[Code]'
})
export class Code {
    constructor(el: ElementRef, renderer: Renderer) {
      console.log(el.nativeElement.innerHTML);
      console.log(renderer);
    }
}
