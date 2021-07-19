import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public componentInteraction: string = 'https://angular.io/guide/component-interaction';
  public name: string = 'Artem';

  ngOnInit(): void {
  }


}

