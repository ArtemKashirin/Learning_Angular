import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reference-variables',
  templateUrl: './reference-variables.component.html',
  styleUrls: ['./reference-variables.component.scss']
})
export class ReferenceVariablesComponent implements OnInit {
  public referenceVariables: string = 'https://angular.io/guide/template-reference-variables';

  constructor() {
  }

  ngOnInit(): void {
  }

  showText(value: string) {
    console.log(value);
  }
}
