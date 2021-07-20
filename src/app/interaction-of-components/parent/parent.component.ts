import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";


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

  // 6. Появляется доступ к методам и свойствам ребенка
  @ViewChild(ChildComponent) child: ChildComponent = new ChildComponent();

  ngOnInit(): void {

  }

  //4 - 5. Данный метод вызывается по событию из потомка
  parentUpperCase($event: string) {
    let city: string = $event.toUpperCase();
    console.log(city)


  }

// 6. В методе читаем свойство ребенка и изменяем его
  valueTransformation() {
    let transform = this.child.citizenship.toUpperCase();
    console.log(transform);
    console.log(this.child)
  }

}

