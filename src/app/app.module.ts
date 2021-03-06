import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HooksComponent} from './hooks/hooks.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EncapsulationStyleComponent} from './encapsulation-style/encapsulation-style.component';
import {ParentComponent} from './interaction-of-components/parent/parent.component';
import {ChildComponent} from './interaction-of-components/child/child.component';
import {ComponentStyleComponent} from './component-style/component-style.component';
import {ContentParentComponent} from './content-projection/content-parent/content-parent.component';
import {ContentChildComponent} from './content-projection/content-child/content-child.component';
import {InterpolationComponent} from './template/interpolation/interpolation.component';
import {StatementsComponent} from './template/statements/statements.component';
import {PipesComponent} from './template/pipes/pipes.component';
import {BindingComponent} from './template/binding/binding.component';
import {AttributeBindingComponent} from './template/attribute-binding/attribute-binding.component';
import {EventBindingComponent} from './template/event-binding/event-binding.component';
import {ReferenceVariablesComponent} from './template/reference-variables/reference-variables.component';
import {DirectivesComponent} from './directives/directives.component';
import {ChangesColorDirective} from './directives/changes-color.directive';
import {DependencyInjectionComponent} from './dependency-injection/dependency-injection.component';
import {ManipulatingDomElementsComponent} from './manipulating-dom-elements/manipulating-dom-elements.component';
import {DynamicComponentsComponent} from './dynamic-components/dynamic-components.component';
import {MainComponent} from './routing/main/main.component';
import {HomeComponent} from './routing/home/home.component';
import {AboutComponent} from './routing/about/about.component';
import {ContactsComponent} from './routing/contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HooksComponent,
    EncapsulationStyleComponent,
    ParentComponent,
    ChildComponent,
    ComponentStyleComponent,
    ContentParentComponent,
    ContentChildComponent,
    InterpolationComponent,
    StatementsComponent,
    PipesComponent,
    BindingComponent,
    AttributeBindingComponent,
    EventBindingComponent,
    ReferenceVariablesComponent,
    DirectivesComponent,
    ChangesColorDirective,
    DependencyInjectionComponent,
    ManipulatingDomElementsComponent,
    DynamicComponentsComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
