import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  addUser(user: any) {
    return this.http.post<any>("https://jsonplaceholder.typicode.com/users", {user});
  }

}