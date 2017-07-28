import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollListener]'
})
export class ScrollListenerDirective {

  pastHead: boolean;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll')
  doSomething(){
    this.setPastHead();
  }

  setPastHead(){
    let elPos = this.el.nativeElement.offsetTop;
    let winPos = window.pageYOffset;
    this.pastHead =  winPos >= (elPos - 2);

    if(this.pastHead){
      document.getElementById('navbar').classList.add('black-nav');
    } else {
      document.getElementById('navbar').classList.remove('black-nav');
    }
  }

  ngAfterViewInit(){
    this.setPastHead();
  }
}
