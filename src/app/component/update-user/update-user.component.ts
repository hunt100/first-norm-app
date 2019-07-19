import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  currentUser: User;
  toggle: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.currentUser = new User(0,'','');
    this.getUserById();
  }


  getUserById():void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(response => this.currentUser = response);
    
  }

  updateUser():void {
    this.userService.updateUser(this.currentUser).subscribe(() => {console.log(this.currentUser); this.goBack()});
  }

  goBack() {
    this.location.back();
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

  onSubmit() {
    this.updateUser();
    this.onToggle();
  }
}
