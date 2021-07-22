import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public directives: string = 'https://angular.io/guide/built-in-directives';
  public class = {
    saveable: true,
    modified: false,
    special: true
  };
  public currentStyles = {
    'font-style': this.class.saveable ? 'italic' : 'normal',
    'font-weight': this.class.modified ? 'bold' : 'normal',
    'font-size': !this.class.special ? '24px' : '12px',
    'color': 'red'
  };
  public ngModel: string = '';
  public ifDirectives: boolean = true;
  public items: number[] = [1, 2, 3, 4, 5, 6, 7];
  public color: string = 'red';

  constructor() {
  }


  ngOnInit(): void {

  }
}
