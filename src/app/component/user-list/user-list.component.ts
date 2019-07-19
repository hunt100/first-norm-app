import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  responseUsers: User[];
  responseUser: User;

  

  toggler: boolean = false;

  constructor(private userService: UserService) { }

  onToggle(value: boolean) {
    this.toggler = !this.toggler;
    console.warn(this.toggler);
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers():void {
    this.userService.getAllUsers().subscribe(response => this.responseUsers = response);
  }

  getUserById(id: number):void {
    this.userService.getUserById(id).subscribe(response => this.responseUser = response);
    console.log(this.responseUser);
  }

  deleteUser(user: User):void {
    this.responseUsers = this.responseUsers.filter( u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
    console.log(user, this.responseUsers);
  }

  

}
