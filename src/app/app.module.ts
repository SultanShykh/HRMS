import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RolesComponent,
    UsersComponent,
    NavbarComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
