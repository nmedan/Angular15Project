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
  title: string | undefined;
  //title2!: string;
  isMobile: boolean = false;
  isMenuOpened: boolean = false;

  constructor ()  {
  }

  ngOnInit() : void {
     
   //   if (!this.title) {
   //     console.log(thititle)
   //   }
     this.isMobile = this.checkIfIsMobile();
   //   this.title2.length;
   //   this.title?.length;
   //   if (this.title !== undefined) {
   //    this.title.length;
   //   }
     fromEvent(window, 'resize').pipe(untilDestroyed(this), throttleTime(100), debounceTime(100)).subscribe(() => this.isMobile = this.checkIfIsMobile());
  }


  checkIfIsMobile(): boolean {
     return window.innerWidth < 720 && window.innerHeight < 1280;
  }

  manageMenu() {
     this.isMenuOpened = !this.isMenuOpened;
  } 

 
}
