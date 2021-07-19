import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-encapsulation-style',
  templateUrl: './encapsulation-style.component.html',
  styleUrls: ['./encapsulation-style.component.scss'],
  // инкапсулирует(изолирует) стили и теги разметки компонента в ShadowDom, не доболяет рандомно сгенированный хеш к каждому элементу и селектору разметки,
  // а только к _ngcontent который генирируется на главном селекторе компонента, даже не будут применяться стили из глобального файла стилей
  // encapsulation: ViewEncapsulation.ShadowDom

  // инкапсулирует(изолирует) стили компонента, добовляя к каждому селектору элемента разметки рандомный хеш, а также _nghost к главному селектору компонента
  // и к последующим вложенным тегам разметки. Данный способоб используется по умолчанию и его указывать явно нет необходимости
  encapsulation: ViewEncapsulation.Emulated

  // не инкапсулирует стили компонента, это сродни тому, что писать в файле с глобальными атрибутами, не добовляет рандомные хеши к элементу разметки и
  // селектору стилей. Если данный способ указать на главном файле в кторый вложены все потомки то, стили можно писать в главном(родительском)
  // компоненте для всех потомков
  // encapsulation: ViewEncapsulation.None

})
export class EncapsulationStyleComponent implements OnInit {
  public viewEncapsulation: string = 'https://angular.io/guide/view-encapsulation';

  constructor() {
  }

  ngOnInit(): void {
  }

}
