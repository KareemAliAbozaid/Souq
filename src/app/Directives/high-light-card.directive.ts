import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighLightCard]',
  standalone: true
})
export class HighLightCardDirective implements OnChanges {

  @Input() externalColor: string = 'blue';
  @Input('appHighLightCard') defaultColor: string = 'yellow';

  constructor(private ele: ElementRef) {

  }
  ngOnChanges() {
    this.ele.nativeElement.style.background = this.defaultColor;
  }

  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.background = this.externalColor;
  }
  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.background = this.defaultColor;
  }

}
