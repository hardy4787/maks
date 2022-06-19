import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoursePlateBorder]'
})
export class CoursePlateBorderDirective implements OnInit{
  @Input() appCoursePlateBorder: Date;
  currentDate = new Date();
  expirationDate = new Date((new Date).setDate(this.currentDate.getDate() - 14));

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    this.setBorderColor();
  }

  private setBorderColor() {
    if (this.appCoursePlateBorder < this.currentDate && this.appCoursePlateBorder >= this.expirationDate) {
      this.el.nativeElement.style.border = '1px solid green';
    }

    else if (this.appCoursePlateBorder > this.currentDate) {
      this.el.nativeElement.style.border = '1px solid blue';
    }
  }
}
