import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {Music} from "../../model/Music";

@Directive({
  selector: '[badgeChef]'
})
export class BadgeChefDirective implements OnInit, OnChanges{
  @Input() employe: Music = {};

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    debugger;
  }

  ngOnInit(): void {
    this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML','');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
