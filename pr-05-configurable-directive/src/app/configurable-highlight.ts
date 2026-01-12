import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[configurableHighlight]',
  standalone: true
})
export class ConfigurableHighlight {

  @Input('highlightColor') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  // Коли миша наводиться на елемент
  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBackgroundColor(this.highlightColor);
  }

  // Коли миша залишає елемент
  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackgroundColor('transparent');
  }

  private setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
