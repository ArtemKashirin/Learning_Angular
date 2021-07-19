import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HooksComponent } from './hooks/hooks.component';
import {FormsModule} from "@angular/forms";
import { EncapsulationStyleComponent } from './encapsulation-style/encapsulation-style.component';
import { ParentComponent } from './interaction-of-components/parent/parent.component';
import { ChildComponent } from './interaction-of-components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    EncapsulationStyleComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
