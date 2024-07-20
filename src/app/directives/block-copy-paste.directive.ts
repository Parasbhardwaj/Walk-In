import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlockCopyPaste]',
  standalone: true
})
export class BlockCopyPasteDirective {

  constructor() { }

  @HostListener('paste',['$event'])
  @HostListener('copy',['$event'])
  @HostListener('cut',['$event'])
  
  onEvent(event: ClipboardEvent): void {
    event.preventDefault();
  }

}
