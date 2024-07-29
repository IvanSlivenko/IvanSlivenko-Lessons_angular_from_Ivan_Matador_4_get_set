import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ShowTitleComponent } from './components/show-title/show-title.component';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTitleComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
