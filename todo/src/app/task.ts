export class Task {
  private _action : string ;
  private _done   : boolean;

  public get action()       : string { return this._action  ; }
  public set action(action : string) { this._action = action; }

  public get done()     : boolean { return this._done; }
  public set done(done : boolean) { this._done = done; }

  constructor(action : string, done : boolean) {
    this.action = action;
    this.done   = done  ;
  }
}
