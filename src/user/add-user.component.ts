import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import {UserService} from './user.service';
import { fromEvent } from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, throttleTime , map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {User} from '../user/user'
import {FormBuilder} from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
@UntilDestroy()
@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})

export class AddUserComponent {
  user: User;
  @Output() formSubmited = new EventEmitter<any>;
   title: string = "Aggiungi utente";
   isMobile: boolean = false;
   successMessage: string = '';
   addUserForm: FormGroup;
   addressForm: FormGroup;
  constructor (private userService: UserService, private route:ActivatedRoute) { 
    this.addressForm = new FormGroup({street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl('' ),
    zipcode: new FormControl('')});
    this.addressForm.addValidators([this.checkAddressField()]);
    this.addUserForm =  new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      address: this.addressForm
 });
  
   this.user = this.addUserForm.value as User;
  }

  ngOnInit() : void {
  
    this.isMobile = this.checkIfIsMobile();
    
    //   this.title2.length;
    //   this.title?.length;
    //   if (this.title !== undefined) {
    //    this.title.length;
    //   }
      fromEvent(window, 'resize').pipe(untilDestroyed(this), throttleTime(100), debounceTime(100)).subscribe(() => this.isMobile = this.checkIfIsMobile());
  }

  addNewUser(user: any) {
    this.userService.addUser(user).subscribe((response) => {
      this.addUserForm.reset();
      this.successMessage = 'User successfully created.'
    })
    
  }

  onSubmit() {
    this.addUserForm.markAllAsTouched();
    
    if (this.addUserForm.valid) {
       this.addNewUser(this.user);
    }    
    
  }
  
  checkIfIsMobile(): boolean {
    return window.innerWidth < 720 && window.innerHeight < 1280;

  }

  checkAddressFieldMissing(fieldname: string): boolean {
    const error = this.addressForm.getError('addressFieldMissing');
    return error && error?.[fieldname];
  }

  checkAddressNotCompleted() {
    return this.addressForm.getError('addressFieldMissing');    
  }

  checkAddressField(): ValidatorFn   {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstFieldValue = control.get('street')?.value;
      const secondFieldValue = control.get('city')?.value;
      const thirdFieldValue = control.get('suite')?.value;
      const fourthFieldValue = control.get('zipcode')?.value;
      const err: any = {};
      console.log(firstFieldValue);
      if (firstFieldValue || secondFieldValue || thirdFieldValue || fourthFieldValue) {
        if (!firstFieldValue || !secondFieldValue || !thirdFieldValue || !fourthFieldValue) {
          if (!firstFieldValue) {
            err['street'] = true;
          }

          if (!secondFieldValue) {
            err['city'] = true;
          }

          if (!thirdFieldValue) {
            err['suite'] = true;
          }
          
          if (!fourthFieldValue) {
            err['zipcode'] = true;
          }
          return {addressFieldMissing: err};
        }
      }
    
      return null; 
    
  };
}
}