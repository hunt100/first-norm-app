import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() responseUsers: User[];
  @Output() toggleEvent = new EventEmitter<boolean>();
  formUser: User;
  userForm: FormGroup;

  constructor(private userService: UserService) { }

  changeTogglerToTrue() {
    this.toggleEvent.emit(true);
  }

  ngOnInit() {
    this.formUser = new User(0,'','');
    this.userForm = new FormGroup({
      'login': new FormControl(this.formUser.login, [Validators.required, Validators.minLength(4)]),
      'password': new FormControl(this.formUser.password, Validators.required)
    });
  }

  get login() {return this.userForm.get('login');}
  get password() {return this.userForm.get('password');}

  createUser():void {
    this.userService.createUser(this.userForm.value).subscribe(user => this.responseUsers.push(user));
    console.log(this.userForm.value);
  }

  onSubmit() {
    this.createUser();
    this.changeTogglerToTrue();
  }


}
