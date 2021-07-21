import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  public eventBinding: string = 'https://angular.io/guide/event-binding';

  constructor() {
  }

  ngOnInit(): void {
  }

  toUpper() {
    console.log(this.eventBinding.toUpperCase())
  }
}
