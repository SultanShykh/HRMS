import { Component, Input, Inject, OnInit } from '@angular/core';
import { PagedResultDto } from 'src/app/dtos/PagedResultDto';
import { ResponseModel } from 'src/app/dtos/ResponseModel';
import { UserDto } from 'src/app/dtos/UserDto';
import { UserService } from 'src/app/services/user-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  title: '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
    private builder: FormBuilder,
    private ref: MatDialogRef<EditUserComponent>,
    private userService: UserService) {
      this.user = this.data.userDto;
      this.title = this.data.title;
  }

  ngOnInit(): void {
    //this.setPopUpData(this.user);
  }

  // setPopUpData(data: UserDto){
  //   this.myForm.setValue({
  //     name: this.data.userName,
  //     email: this.data.email,
  //     password: this.data.password,
  //   });
  // }
  myForm = this.builder.group({
      id: this.builder.control(''),      
      userName: this.builder.control(''),
      email: this.builder.control(''),
      password: this.builder.control(''),
      role: this.builder.control(''),
    }
  );

  UpdateUser(user: UserDto) {
    this.userService
    .updateUser(user)
    .subscribe((users: ResponseModel) => {
      
    });
  }

  UpdatedFields(data: any): UserDto {
    var userDto = new UserDto();

    userDto.id = data.id;
    userDto.email = data.email;
    userDto.userName = data.userName;
    userDto.password = data.password;
    userDto.role = data.role;

    return userDto;
  }

  SaveUser(){
    var data = this.UpdatedFields(this.myForm.value);
    this.userService.createUser(data).subscribe(res => {
      this.closeModal();
    });
  }


  

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

  closeModal(){
    this.ref.close();
  }
}
