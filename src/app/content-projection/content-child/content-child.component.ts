import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit {
  public isShow: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }

}
