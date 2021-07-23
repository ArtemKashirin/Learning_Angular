import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangesColor]'
})
export class ChangesColorDirective implements OnInit {
  @Input() appChangesColor: string = '';

  constructor(private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.elem.nativeElement.style.color = this.appChangesColor;
    // console.log(this.appChangesColor) // red
  }

}
