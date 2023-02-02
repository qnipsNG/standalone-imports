import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appB]',
  standalone: true,
})
export class BDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'blue');
  }
}
