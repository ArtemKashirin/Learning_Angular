import {AfterViewInit, Component, ComponentRef, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-manipulating-dom-elements',
  templateUrl: './manipulating-dom-elements.component.html',
  styleUrls: ['./manipulating-dom-elements.component.scss']
})
export class ManipulatingDomElementsComponent implements OnInit, AfterViewInit {
  public manipulationElement: string = 'https://angdev.ru/doc/angular-view/';
  // ElementRef это тип для обычного HTML-элемента
  @ViewChild('htmlRef') paragraph: ElementRef;
  // TemplateRef<any> это тип для ng-template, в DOM не рендерится
  @ViewChild('tempRef') template: TemplateRef<any>;
  // ViewContainerRef это тип для ng-container для представления
  @ViewChild('containerRef') container: ViewContainerRef;
  //  возвращается при динамическом создании компонента с использованием сервиса ComponentFactoryResolver
  @ViewChild('componentRef') component: ComponentRef<any>;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // элемент становится доступным по локальной ссылке на нем и только в хуке ngAfterViewInit
    // console.log(this.paragraph);
    // если ссылка на ng-template вернет объект TemplateRef
    // console.log(this.template);
    // если ссылка на ng-container вернет объект ElementRef
    // console.log(this.container);
    // если ссылка на селектор компонента вернте  класс компонента
    // console.log(this.component)

  }


}
