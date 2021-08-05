import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { TodoList } from 'src/app/models/todolist';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo:EventEmitter<any>=new EventEmitter();
  content:string;
  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      content:this.content,
      isCompleted:false
    }
    this.addTodo.emit(todo);
  }
}
