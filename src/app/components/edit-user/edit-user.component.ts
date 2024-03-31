import { Component, Input, Inject } from '@angular/core';
import { PagedResultDto } from 'src/app/dtos/PagedResultDto';
import { ResponseModel } from 'src/app/dtos/ResponseModel';
import { UserDto } from 'src/app/dtos/UserDto';
import { UserService } from 'src/app/services/user-service';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

declare var window: any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent{
  // @Input() user? : UserDto;
  // @Output() usersUpdated = new EventEmitter<UserDto[]>();
 

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserDto) {}
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
