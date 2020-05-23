import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { LogicComponent } from './logic/logic.component';
import { ClassstylebindingComponent } from './classstylebinding/classstylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemobootstrapComponent } from './demobootstrap/demobootstrap.component';
import { FormsModule } from '@angular/forms';
import { PushspliceComponent } from './pushsplice/pushsplice.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { TodoappComponent } from './todoapp/todoapp.component';

// const appRoutes: Routes = [
//   {
//     path: '',
//     component: Comp1Component,
//   },
//   {
//     path: 'c2',
//     component: Comp2Component,
//   },
//   {
//     path: 'c3',
//     component: Comp3Component,
//   },
//   {
//     path: 'c4',
//     component: Comp4Component,
//   },
// ];
/*
home : domain.name ;localhost:4200 :Home  ,path : ''
about : domain.name/about ;localhost:4200/about; path : 'about'


*/
const appRoutes: Routes = [
  {
    path: '',
    component: Comp1Component,
  },

  {
    path: 'c2',
    component: Comp2Component,
  },
  {
    path: 'c3',
    component: Comp3Component,
  },
  {
    path: 'c4',
    component: Comp4Component,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HelpComponent,
    AboutComponent,
    LogicComponent,
    ClassstylebindingComponent,
    EventbindingComponent,
    DirectivesComponent,
    DemobootstrapComponent,
    PushspliceComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    TodoappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //  RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes), //1 ,appRoutes (hold routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
