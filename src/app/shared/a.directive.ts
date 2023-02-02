import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appA]',
  standalone: true,
})
export class ADirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'background-color', 'green');
  }
}
