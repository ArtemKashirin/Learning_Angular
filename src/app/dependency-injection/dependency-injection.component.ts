import {Component, OnInit} from '@angular/core';
import {InteractionService} from "../interaction.service";

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {
  public di: string = 'https://angular.io/guide/dependency-injection';
  // тут происходит внедрение зависимости которая необходима классу
  // по сути просто класс или поставщик услуг, в данном случае сервис
  // сервисы могут использовать другие сервисы как поставщиков и так далее
  constructor(private interaction: InteractionService) {
  }

  ngOnInit(): void {
    // console.log(this.interaction.user) // Объект User
  }

}
