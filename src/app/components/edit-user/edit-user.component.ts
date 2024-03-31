import { Component, Input, Inject, OnInit } from '@angular/core';
import { PagedResultDto } from 'src/app/dtos/PagedResultDto';
import { ResponseModel } from 'src/app/dtos/ResponseModel';
import { UserDto } from 'src/app/dtos/UserDto';
import { UserService } from 'src/app/services/user-service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit{
  // @Input() user? : UserDto;
  // @Output() usersUpdated = new EventEmitter<UserDto[]>();
  user : UserDto;
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserDto, private builder: FormBuilder) {
    this.user = this.data;
  }

  ngOnInit(): void {
    this.setPopUpData(this.user);
  }

  setPopUpData(data: UserDto){
    this.myForm.setValue({
      name: this.data.userName,
      email: this.data.email,
      password: this.data.password,
    });
  }
  myForm = this.builder.group(
    {
      name: this.builder.control(''),
      email: this.builder.control(''),
      password: this.builder.control(''),
    }
  );
  // updateUser(user: UserDto) {
  //   this.userService
  //   .updateUser(user)
  //   .subscribe((users: ResponseModel) => {
      
  //   });
  // }

  // deleteUser(user: UserDto) {
  //   this.userService
  //   .deleteUser(user)
  //   .subscribe((users: UserDto[]) => this.usersUpdated.emit(users));
  // }
    
  // createUser(user: UserDto) {
  //   this.userService
  //   .createUser(user)
  //   .subscribe((users: UserDto[]) => this.usersUpdated.emit(users));
  // }

  // ngOnInit(): void {
  //   this.formModal = new window.bootstrap.Modal(
  //     document.getElementById("myModal")
  //   );
  // }

  // hideModal(){
  //   this.formModal.hide();
  // }
}
