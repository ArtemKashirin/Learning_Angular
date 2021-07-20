import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public pipes: string = 'https://angular.io/guide/pipes';
  public date: Date = new Date()

  constructor() {
  }

  ngOnInit(): void {
  }

}
