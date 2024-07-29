import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
@Input()  user!: User;
@Output('newName') newName: EventEmitter<any> = new EventEmitter<any>();

private _user: any;

constructor(private cdr: ChangeDetectorRef){

}
ngOnInit(){
  // console.log('ngOnInit :', this.user );
  // setTimeout(()=>{
  //   console.log('Name must be changed')
  //   this.user.first_name="New Name"
  //   //this.cdr.detectChanges();
  // }, 2000)
}
ngOnChanges(changes: SimpleChanges){
  console.log('ngOnChanges OnPush', changes);
  // if (changes['muser']) {
  //   const change = changes['user'];
  //   console.log('Previous value:', change.previousValue);
  //   console.log('Current value:', change.currentValue);
  // }
}
 changeName(){
  this.newName.emit(this.user)
 }

}
