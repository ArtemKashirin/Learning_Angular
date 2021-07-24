import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public routing: string = 'https://angdev.ru/doc/angular-routing-basics/;'

  constructor() {
  }

  ngOnInit(): void {
  }

}
