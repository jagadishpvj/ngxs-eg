import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  fetchTodos() {
    return this.http.get<Todo[]>('http://localhost/api_demo/get.php');
  }

  deleteTodo(id: number) {
    return this.http.delete('http://localhost/api_demo/delete.php?id=' + id);
  }

  addTodo(payload: Todo) {
  let npayload = [payload];
    return this.http.post<Todo>('http://localhost/api_demo/add.php', npayload);
  }

  updateTodo(payload: Todo, id: number) {
    let npayload = [payload];

    console.log(id,payload)
    return this.http.put<Todo>('http://localhost/api_demo/put.php?id=' + id, npayload);
  }
}
