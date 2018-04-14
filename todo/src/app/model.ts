import { Task } from "./task";
import { discardPeriodicTasks } from "@angular/core/testing";


export class Model {
  user  : string    ;
  tasks : Task[];

  constructor() {
    this.user  = "Adam";
    this.tasks = [
      new Task("Buy Flowers"    , false),
      new Task("Get Shoes"      , false),
      new Task("Collect Tickets", false),
      new Task("Call Joe"       , false)
    ];
  }
}
