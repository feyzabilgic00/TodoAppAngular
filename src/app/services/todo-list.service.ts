import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TodoList } from '../models/todolist';
import { Observable } from 'rxjs';

const headers={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  apiUrl="https://localhost:44351/api/";
  todo:TodoList;
  constructor(private httpClient:HttpClient) { }
  
  getTodoLists():Observable<TodoList[]>{
    let newPath=this.apiUrl+"todos/getall";
    return this.httpClient.get<TodoList[]>(newPath);
    }
    toggleComplete(id:string){
      let newPath=this.apiUrl+"todos/getbyid/id="+id;
      return this.httpClient.put(newPath,headers);
    }
    deleteTodo(todo:TodoList):Observable<TodoList>{
      let newPath=this.apiUrl+"todos/delete/id="+todo.id;
      return this.httpClient.post<TodoList>(newPath,headers);
    }

    addTodo(todo:TodoList):Observable<TodoList> {
      let newPath = this.apiUrl + 'todos/add';
      return this.httpClient.post<TodoList>(newPath, todo);
    }
    updateTodo(todo: TodoList): Observable<TodoList> {
      let newPath = this.apiUrl + 'todos/edit';
      return this.httpClient.post<TodoList>(newPath, todo);
    }
}
