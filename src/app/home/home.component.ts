import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    itemCount = 4;
    btnText = 'Add an Item';
    goalText = '';
    goals = [];

    constructor() { }

    ngOnInit() {
      this.itemCount = this.goals.length;
    }

    addItem() {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    }

    // deleteItem() {
    //   this.goals.delete(this.goalText)
    // }

  }
