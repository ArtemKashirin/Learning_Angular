import {
  SimpleChanges,
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, Input,
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public hooks: string = 'https://angular.io/guide/lifecycle-hooks';
  @Input() value: string = '';

  // public value: string = 'Artem';


  constructor() {
    // console.log('constructor!')
  }

//Последовательность событий жизненного цикла
  ngOnChanges(changes: SimpleChanges): void {
    // Отвечает, когда Angular УСТАНАВЛИВАЕТ ИЛИ СБРАСЫВАЕТ СВОЙСТВО ВВОДА С ПРИВЯЗКОЙ К ДАННЫМ. Метод получает
    // SimpleChanges объект текущего и предыдущего значений свойств.
    // console.log('ngOnChanges', changes)
  }

  ngOnInit(): void {
    // Инициализируйте директиву или компонент после того, как Angular сначала отобразит свойства с привязкой к
    // данным и задаст входные свойства директивы или компонента.
    // Вызывается один раз, после первого ngOnChanges()
    // console.log('ngOnInit')
  }

  ngDoCheck(): void {
    // Обнаруживает и действует в соответствии с изменениями, которые Angular не может или не хочет обнаружить
    // самостоятельно.
    // Вызывается сразу после ngOnChanges() каждого запуска обнаружения изменений и сразу после ngOnInit() первого
    // запуска.
    // console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    // Отвечайте после того, как Angular проецирует внешний контент в представление компонента или в представление,
    // в котором находится директива.
    // Вызывается один раз после первого ngDoCheck()
    // console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    // Ответить после того, как Angular проверит содержимое, проецируемое в директиву или компонент.
    // Вызывается после ngAfterContentInit()и каждый последующий ngDoCheck()
    // console.log('ngAfterContentChecked')

  }

  ngAfterViewInit(): void {
    // Ответить после того, как Angular инициализирует представления компонента и дочерние представления или
    // представление, содержащее директиву.
    // Вызывается один раз после первого ngAfterContentChecked()
    // console.log('ngAfterViewInit')

  }

  ngAfterViewChecked(): void {
    // Ответить после того, как Angular проверит представления компонента и дочерние представления или
    // представление, содержащее директиву.
    // Вызывается после ngAfterViewInit()и каждого последующего ngAfterContentChecked()
    // console.log('ngAfterViewChecked')

  }

  ngOnDestroy(): void {
    // Вызывается непосредственно перед тем, как Angular уничтожит директиву или компонент.
    // Когда переходим по ссылке в другое место приложения
    // console.log(' ngOnDestroy')
  }

}
