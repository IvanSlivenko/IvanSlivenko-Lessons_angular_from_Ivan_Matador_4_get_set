import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrl: './show-title.component.scss'
})
export class ShowTitleComponent implements OnInit, OnDestroy {
  
  @Input() incomingTitle!: string;
  
  
  @Output('outputTitle') outputTitle: EventEmitter<string> = new EventEmitter<string>();

  changedTitle!: string;

  @Output('outputTitle2') outputTitle2: EventEmitter<string> = new EventEmitter<string>();
  changedTitle2!: string;

  constructor(){
    console.log('constructor', this.incomingTitle);
    
  }
  
  ngOnInit(){
    console.log('ngOnInit :', this.incomingTitle );
    
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    
  }

  sendTitle(){
    this.outputTitle.emit(this.changedTitle)
    this.changedTitle='';
  }

  sendTitle2(){
    this.outputTitle2.emit(this.changedTitle2)
    this.changedTitle2='';
    
  }

 

}
