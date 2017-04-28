/**
 * Directive   : provides the functionality of the @Directive decorator.
   ElementRef  : injects into the directive's constructor so the code can access the DOM element.
   Input       : allows data to flow from the binding expression into the directive.
   HostListener: allow to add two eventhandlers that respond when the mouse enters or leaves
 */
import { Directive, ElementRef,Input ,HostListener} from '@angular/core';

@Directive({
  //Though highlight is a more concise name than myHighlight and would work, a best practice is to prefix selector names to ensure they don't conflict with standard HTML attributes
  //do not prefix the highlight directive name with ng because that prefix is reserved for Angular and using it could cause bugs that are difficult to diagnose. 
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
@Input('myHighlight') highlightColor: string;

         
@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor);
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null); //No quate for null
}
private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
