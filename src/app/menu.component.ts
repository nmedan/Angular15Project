import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {

  @Input() isMobile: boolean = false;
  constructor () {
  }


}
