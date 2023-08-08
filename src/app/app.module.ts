import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TemperatureKnobComponent} from "./temeprature-knob/temperature-knob.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemperatureKnobComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
