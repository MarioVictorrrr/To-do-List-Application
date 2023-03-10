import { Component } from '@angular/core';

// interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {


  public taskList: Array<TaskList> = [];

  public deleteTask(index: number){
    this.taskList.splice(index, 1);
  }


  public deleteAll(){

    const confirm = window.confirm("Do you really want to delete all the task?");
    if(confirm){
      this.taskList = [];
    }
  }

  public setTask(event: string){
    let nextId: number;
    let lastIndex: number;
    if(this.taskList.length > 0){
      lastIndex = this.taskList.length-1;
      nextId = this.taskList[lastIndex].id + 1;
      this.taskList.push({id: nextId, name: event, checked: false});
    } else {
      this.taskList.push({id: 1, name: event, checked: false});
    }


  }


}
