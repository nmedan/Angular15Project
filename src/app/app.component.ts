import { Component, OnInit } from '@angular/core';
import {MenuComponent} from './menu.component'
import { UserListComponent } from '../user/user.component';
import  {AddUserComponent } from '../user/add-user.component';
import { Observable } from 'rxjs';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  users: any[] = [];
  title: string = '';
  isAddUser: boolean = false;

  constructor (private userService: UserService)  {
    
  }

  ngOnInit() {
    this.getUsers();
  }

  addNewUser(user: any) {
    this.userService.addUser(user).subscribe(() => {this.getUsers();});
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {this.users = res;})
  }

  changePage(state: boolean) {
    this.isAddUser = state;
  }
}
