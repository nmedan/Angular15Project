import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'list-user',
  templateUrl: 'user.component.html'
})

export class UserListComponent {
  // user: {id: number, name: string, username: string, email: string, address: {street: string, suite: string, city: string,
  //   zipcode: string, geo: {"lat": string, "lng": string}}, phone: string, website: string, company: {name:string, catchPhrase: string,
  //   bs: string}};
 
  @Input() users: any[];
  title: string = "Lista utenti";

  constructor () {
    this.users = [];
  }


}