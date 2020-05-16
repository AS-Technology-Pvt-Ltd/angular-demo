import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { LogicComponent } from './logic/logic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HelpComponent,
    AboutComponent,
    LogicComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
