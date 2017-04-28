/**
 * Directive: provides the functionality of the @Directive decorator.
  ElementRef: injects into the directive's constructor so the code can access the DOM element.
       Input: allows data to flow from the binding expression into the directive.
 */
import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  //Though highlight is a more concise name than myHighlight and would work, a best practice is to prefix selector names to ensure they don't conflict with standard HTML attributes
  //do not prefix the highlight directive name with ng because that prefix is reserved for Angular and using it could cause bugs that are difficult to diagnose. 
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
    
  }

}
