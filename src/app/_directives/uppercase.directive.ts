import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[upper_case]'
})

export class UppercaseDirective {

  constructor(public ref: ElementRef,private _el: ElementRef) { 
  }

  @HostListener('input', ['$event']) onInput(event) {
    this.ref.nativeElement.value = event.target.value.toUpperCase();
  }
}
