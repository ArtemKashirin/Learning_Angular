import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {
  public attributeBinding: string = 'https://angular.io/guide/attribute-binding';
  public class: string = 'bold';
  public isItalClass: boolean = true;
  public classRed: string = 'red';


  constructor() {
  }

  ngOnInit(): void {
  }

}
