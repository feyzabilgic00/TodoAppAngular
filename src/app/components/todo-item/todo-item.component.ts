import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { TodoList } from 'src/app/models/todolist';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:TodoList;
  @Output() deleteTodo:EventEmitter<TodoList>=new EventEmitter();
  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
  }
  setClasses(){
    let classes={
      todo:true,
      "is-complete":this.todo.isCompleted
    }
    return classes;
  }
  onToggle(todo){
    todo.isCompleted=!todo.isCompleted;
    this.todoListService.updateTodo(todo).subscribe(res=>{
      this.todoListService.getTodoLists();
    });
  }
  onDelete(todo){
    if (confirm('Are you sure to delete this record ?')) {
      this.deleteTodo.emit(todo);
  }
}
}
