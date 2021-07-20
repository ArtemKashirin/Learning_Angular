import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public componentInteraction: string = 'https://angular.io/guide/component-interaction';
  public name: string = 'Artem';
  public fullName: string = '                ivan ivanov                ';
  public age: string = '35';

  ngOnInit(): void {

  }

// 4 - 5. Данный метод вызывается по событию из потомка
  parentUpperCase($event: string) {
    let city: string = $event.toUpperCase();
    console.log(city)

  }
}

