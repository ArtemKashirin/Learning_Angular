import {Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {EncapsulationStyleComponent} from "../encapsulation-style/encapsulation-style.component";

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {
  public dynamicComponents: string = 'https://angdev.ru/doc/dynamic-components/';

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {

  }

  addComponent() {
    // ComponentFactoryResolver - принимает определение класса нужного динамического компонента и возвращает его экземпляр в виде ссылки
    const componentFactory: ComponentFactory<EncapsulationStyleComponent> = this.componentFactoryResolver.resolveComponentFactory(EncapsulationStyleComponent);
    // Для добавления созданного экземпляра в шаблон необходимо передать его в качестве параметра методу createComponent() экземпляра класса ViewContainerRef
    this.viewContainerRef.createComponent(componentFactory)

  }
}
