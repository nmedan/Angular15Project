import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {
  @Input() isAddUser: boolean = false;
  @Output() selectedMenuTabChanged = new EventEmitter<boolean>;

  constructor () {
  }

  selectMenuTab(state: boolean) {
    this.isAddUser = state;
    this.selectedMenuTabChanged.emit(this.isAddUser);
  }

}
