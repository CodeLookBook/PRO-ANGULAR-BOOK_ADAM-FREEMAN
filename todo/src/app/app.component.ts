import { Component } from "@angular/core";
import { Model     } from "./model";
import { Task } from "./task";

@Component({
  selector: "todo-app",
  templateUrl: "./app.component.html"
})

export class AppComponent {
  model : Model = new Model();

  get name() : string {
    return this.model.user;
  }

  get tasks() : Task[] {
    return this.model.tasks.filter(i => !i.done);
  }

  public addTask(text : string) : void {
    this.model.tasks.push(new Task(text, false));
  }
}
