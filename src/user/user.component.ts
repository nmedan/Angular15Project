import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {UserService} from './user.service';

@Component({
  selector: 'list-user',
  templateUrl: 'user.component.html'
})

export class UserListComponent implements OnInit {
  // user: {id: number, name: string, username: string, email: string, address: {street: string, suite: string, city: string,
  //   zipcode: string, geo: {"lat": string, "lng": string}}, phone: string, website: string, company: {name:string, catchPhrase: string,
  //   bs: string}};
 
  @Input() users: any[] = [];
  title: string = "Lista utenti";
  displayedColumns: string[] = ['name', 'username', 'email'];

  constructor (private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
 
  getUsers() {
    this.userService.getUsers().subscribe((res) => {this.users = res;})
  }
  
}