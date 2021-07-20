import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-style',
  templateUrl: './component-style.component.html',
  styleUrls: ['./component-style.component.scss'],
  // Способ прописать стили прямо в компоненте
  // styles: ['a {color: #8a3399} ']
})
export class ComponentStyleComponent implements OnInit {
  public componentStyle: string = 'https://angular.io/guide/component-styles;'

  constructor() {
  }

  ngOnInit(): void {
  }

}
