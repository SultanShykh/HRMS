import { Injectable } from '@angular/core';
import { UserDto } from '../dtos/UserDto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environments';
import { PagedResultDto } from '../dtos/PagedResultDto';
import { ResponseModel } from '../dtos/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "Users";
  private pageNumber = 1;
  private pageSize = 10;

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<PagedResultDto<UserDto>> {
    return this.http.get<PagedResultDto<UserDto>>(
      `${environment.apiUrl}/${this.url}?PageNumber=${this.pageNumber}&PageSize=${this.pageSize}`
      );
  }

  public updateUser(user: UserDto) : Observable<ResponseModel> {
    return this.http.put<ResponseModel>(`${environment.apiUrl}/${this.url}`, user);
  }

  public createUser(user: UserDto) : Observable<UserDto[]> {
    return this.http.post<UserDto[]>(`${environment.apiUrl}/${this.url}`, user);
  }

  public deleteUser(user: UserDto) : Observable<UserDto[]> {
    return this.http.delete<UserDto[]>(`${environment.apiUrl}/${this.url}/${user.id}`);
  }
}
