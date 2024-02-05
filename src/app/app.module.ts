import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BinarySearchComponent } from './components/binary-search/binary-search.component';
import { SelectionSortComponent } from './components/selection-sort/selection-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    BinarySearchComponent,
    SelectionSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
