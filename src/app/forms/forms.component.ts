import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public forms: string = 'https://angdev.ru/doc/angular-forms/';
  public loginForm: any = {
    login: '',
    password: '',
  }
  public formGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
this.formGroup = new FormGroup({
  login: new FormControl(this.loginForm.login, Validators.required),
  password: new FormControl(this.loginForm.password, Validators.required)
})
  }

  showLog() {
    // console.log(this.loginForm)
    this.loginForm.login = this.formGroup.value.login;
    this.loginForm.password = this.formGroup.value.password;
    console.log(this.loginForm)
  }

}
