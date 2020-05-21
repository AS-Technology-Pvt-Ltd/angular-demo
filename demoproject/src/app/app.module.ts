import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
