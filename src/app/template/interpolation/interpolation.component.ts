import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  public interpolation: string = 'https://angular.io/guide/interpolation';
  public name: string = 'Artem';
  public sumA: number = 30;
  public sumB: number = 70;

  constructor() {
  }

  ngOnInit(): void {
  }

  upperCaseWord():string {
  return this.name.toUpperCase()
  }
}

