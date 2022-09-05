import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThingspeakService} from './thingspeak.service';
import {HttpClientModule} from '@angular/common/http';
import {RpmToKmhConversionPipe} from './rpm-to-kmh-conversor.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { YesNoPipePipe } from './yes-no-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RpmToKmhConversionPipe,
    YesNoPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ThingspeakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
