import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }

  addUser(user: User) {
    return this.http.post<User>("https://jsonplaceholder.typicode.com/users", {user});
  }

}