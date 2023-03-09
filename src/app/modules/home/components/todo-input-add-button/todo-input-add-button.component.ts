import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-button',
  templateUrl: './todo-input-add-button.component.html',
  styleUrls: ['./todo-input-add-button.component.scss']
})
export class TodoInputAddButtonComponent {

@Output() public emitterTaskList = new EventEmitter();

public taskName?:string;

public submitTask(){

  this.taskName = this.taskName?.trim();
  if(this.taskName){
    this.emitterTaskList.emit(this.taskName);
    this.taskName = "";
  }
}



}
