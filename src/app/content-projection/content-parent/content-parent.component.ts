import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-parent',
  templateUrl: './content-parent.component.html',
  styleUrls: ['./content-parent.component.scss']
})
export class ContentParentComponent implements OnInit {
  public contentProjection: string = 'https://angular.io/guide/content-projection';
  public city: string = 'Moscow';

  constructor() {
  }

  ngOnInit(): void {
  }

}
