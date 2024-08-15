import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponentComponent } from './components/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
