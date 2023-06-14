import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})

export class AddUserComponent {
  user: any;
  @Output() formSubmited = new EventEmitter<any>;
   addUserForm: FormGroup;
   title: string = "Aggiungi utente";

  constructor () {   
    this.addUserForm = new FormGroup({
       name: new FormControl(null),
       username: new FormControl(null),
       email: new FormControl(null),
       phone: new FormControl(null)
    })
    this.user = this.addUserForm.value;
  }

  onSubmit() {
    this.formSubmited.emit(this.user);
    this.addUserForm.reset();
  }

}