import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ReturnedData } from '../../interfaces/returned-data';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})


export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  usersList$!: Observable<User[]>;

  constructor(private  http: HttpClient, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(){
    this.usersList$ = this.http.get<ReturnedData>('https://reqres.in/api/users').pipe(
      map((obj:ReturnedData)=> obj.data)
    );
  }

  change(user: any){
    // user.first_name = 'WOOW';
    const newName = user.first_name;
    const LastName=  'New - '+ user.last_name;

    const newUser: User = {...user}
    newUser.first_name = newName;
    newUser.last_name = LastName
    newUser.id = this.usersList.length
    this.usersList.push(newUser);


  }

  setNewName(event: any){
    event.first_name = 'New-Name';
  }



    // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');

  // }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');

  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');

  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');

  // }

  // ngDoCheck(){
  //   console.log('ngDoCheck');

  // }



}
