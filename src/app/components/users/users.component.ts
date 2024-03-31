import { Component, AfterViewInit, ViewChild, } from '@angular/core';
import { UserDto } from '../../dtos/UserDto';
import { UserService } from '../../services/user-service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

declare var window: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements AfterViewInit{
  title = 'HRMS';
  users: UserDto[] = [];
  userToEdit? : UserDto;
  formModal: any;

  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource: MatTableDataSource<UserDto>;

  @ViewChild(MatSort) sort: MatSort = <MatSort>{};
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(
    private userService : UserService,
    public dialog: MatDialog) {
      this.dataSource = new MatTableDataSource(this.users);
    }
   
    openDialog() {
      this.dialog.open(EditUserComponent, {
        data: {
          UserDto: this.editUser,
        }
      });
    }

  ngOnInit() : void {
     this.userService
     .getUsers()
     .subscribe(result => {
      this.users = result.items;
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.users);
     });
  }  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(){
    this.formModal.show();
  }

  hideModal(){
    this.formModal.hide();
  }

  initNewUser() {
    this.userToEdit = new UserDto();
  }

  updatedUsersList(users: UserDto[]) {
    this.users = users;
  }

  editUser(user: UserDto) {
    debugger
    this.userToEdit = user;
  }
}