import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, throttleTime , map } from 'rxjs/operators';
import {User} from '../user/user'
import { AddUserComponent } from '../user/add-user.component';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  users: User[] = [];
  title: string = '';
  isMobile: boolean = false;
  isMenuOpened: boolean = false;

  constructor ()  {
     this.isMobile = this.checkIfIsMobile();
  }

  ngOnInit() : void {
     fromEvent(window, 'resize').pipe(untilDestroyed(this), throttleTime(100), debounceTime(100)).subscribe(() => this.isMobile = this.checkIfIsMobile());
  }


  checkIfIsMobile(): boolean {
     return window.innerWidth < 720 && window.innerHeight < 1280;
  }

  manageMenu(val: boolean) {
     this.isMenuOpened = !val;
  } 

 
}
