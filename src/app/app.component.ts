import {Component} from '@angular/core';
import {TodoList} from "./todoList";
import {TodoItem} from "./todoItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private list = new TodoList("Eren", [
    new TodoItem("Go for run", false),
    new TodoItem("Get flowers", false),
    new TodoItem("Collect tickets", true),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items
      .filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items;
  }
}
