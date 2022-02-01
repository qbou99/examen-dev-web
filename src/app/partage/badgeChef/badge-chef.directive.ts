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
    let isChef:boolean = false;
    this.employe?.style?.forEach((titre) => {
      if(titre.includes("chef")){
        isChef = true;
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          '<em class="material-icons">supervisor_account</em>'
        );
        return;
      }
    })
    if(!isChef)
    this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML','');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }
}
