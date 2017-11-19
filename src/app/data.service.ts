import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The inital goal', 'Another silly life goal']);
  goal = this.goal.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
