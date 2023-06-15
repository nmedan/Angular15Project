import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import {UserService} from './user.service';
import { fromEvent } from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, throttleTime , map } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})

export class AddUserComponent {
  user: any;
  @Output() formSubmited = new EventEmitter<any>;
   addUserForm: FormGroup;
   title: string = "Aggiungi utente";
   isMobile: boolean = false;

  constructor (private userService: UserService) { 
    this.isMobile = this.checkIfIsMobile();  
    this.addUserForm = new FormGroup({
       name: new FormControl(null),
       username: new FormControl(null),
       email: new FormControl(null),
       phone: new FormControl(null)
    })
    this.user = this.addUserForm.value;
    
  }

  ngOnInit() : void {
    fromEvent(window, 'resize').pipe(untilDestroyed(this), throttleTime(500), debounceTime(500)).subscribe(() => this.isMobile = this.checkIfIsMobile());
  }

  addNewUser(user: any) {
    this.userService.addUser(user).subscribe(() => {this.userService.getUsers()});
  }

  onSubmit() {
    this.addNewUser(this.user);
    this.addUserForm.reset();
  }
  
  checkIfIsMobile(): boolean {
    return window.innerWidth < 720 && window.innerHeight < 1280;
 }
}