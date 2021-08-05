import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/models/todolist';

import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoLists:TodoList[];

  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
    this.getTodoLists();
  }
  getTodoLists(){
  this.todoListService.getTodoLists().subscribe(response=>{
  this.todoLists=response
})
  }
  deleteTodo(todo:TodoList){
    this.todoListService.deleteTodo(todo).subscribe(()=>{
    this.todoLists=this.todoLists.filter(t=>t.id!==todo.id)
  })
  }
  addTodo(todo:TodoList){
      this.todoListService.addTodo(todo).subscribe(todo=>{
        this.todoLists.unshift(todo);
      });
    }
}
