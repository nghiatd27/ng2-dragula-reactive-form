import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SomeComponent } from './some.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, DragulaModule.forRoot() ],
  declarations: [ AppComponent, SomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
