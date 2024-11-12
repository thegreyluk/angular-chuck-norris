import { AsyncPipe, JsonPipe, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../../ngrx-store/todo/todo.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../ngrx-store/store";
import * as TodoActions from "../../ngrx-store/todo/actions";

@Component({
    standalone: true,
    selector: 'ngrx-todo-list',
    imports: [NgFor, NgIf, AsyncPipe, JsonPipe],
    templateUrl: './todo-list.component.html'
    })
export class TodoListComponent {
    todos$: Observable<Todo[]>;
    isLoading$: Observable<boolean>;
    
    constructor(private store: Store<AppState>) {
      this.todos$ = this.store.select((state) => state.todo.todos);
      this.isLoading$ = this.store.select(state => state.todo.loading);
      this.loadTodos();
    }
    
    loadTodos() {
    this.store.dispatch(TodoActions.loadTodos());
    }
    
    addTodo(index: number) {
      const todo: Todo = {id: index, description: 'New Todo', completed: false };
      this.store.dispatch(TodoActions.addTodo({ todo }));
    }
    
    complete(todo: Todo) {
      this.store.dispatch(TodoActions.updateTodo({todo : {...todo, completed: true}}));
    }
}