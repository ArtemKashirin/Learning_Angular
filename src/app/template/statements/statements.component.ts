import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {
public statements:string = 'https://angular.io/guide/template-statements';
  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
  }

  showEvent($event: MouseEvent) {
    console.log($event.target);

  }
}
