import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // 1. Принимаем свойство от родителя и используем в потомке под идентичным именем свойства
  @Input() name: string = "";
  // 1. Принимаем свойство от родителя и используем в потомке под одним именем и переименовываем
  @Input('name') firstName: string = "";

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.name); // Artem
    // console.log(this.firstName); // Artem
  }


}


