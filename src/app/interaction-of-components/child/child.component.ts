import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  // 1. Принимаем свойство от родителя и используем в потомке под идентичным именем свойства
  @Input() name: string = "";
  // 1. Принимаем свойство от родителя и используем в потомке под одним именем и переименовываем
  @Input('name') firstName: string = "";

  // 2. Сначала изменяем входящее свойство, а потом читаем
  @Input()
  set userName(fullName: string) {
    this._userName = fullName.trim()
  }

  get userName(): string {
    return this._userName;
  }

  private _userName: string = '';
  // 3. Принимаем свойство от родителя и используем в потомке под одним именем
  @Input() age: string = '';

  // 4. Экземпляр класса EventEmitter предоставляет методы при помощи которых можно испускать(emit()) события, предварительно передав в них значения или
  // ничего не передовать, а также в другом месте при помощи метода подписываться(subscribe())
  @Output() eventEmit: EventEmitter<string> = new EventEmitter();
  public city: string = 'moscow';

// 6. Свойство которое будет прочитано в родителе
  public citizenship: string = 'Russian Federation';

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.name); // Artem
    // console.log(this.firstName); // Artem
    // console.log(this._userName) // ivan ivanov
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes) // объект будет сигнализировать о каждом изменение значения в родителе
  }


  showLastName() {
    this.eventEmit.emit(this.city);
  }
}


