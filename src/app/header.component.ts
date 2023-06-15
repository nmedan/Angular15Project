import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MenuComponent} from './menu.component'
import { UserListComponent } from '../user/user.component';
import  {AddUserComponent } from '../user/add-user.component';
import { Observable } from 'rxjs';
import {UserService} from '../user/user.service';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() isMobile: boolean = false;
  @Input() isMenuOpened: boolean = false;
  @Output() menuOpenedClosed = new EventEmitter<boolean>;

  constructor ()  {
    console.log(this.isMobile);
  }

  ngOnInit() : void {

  }

  collapseMenu(val: boolean) {
    this.menuOpenedClosed.emit(val);
  }
}
