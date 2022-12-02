import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {BooksPanelComponent} from "./books-panel/books-panel.component";
import {BetterLoggerService} from "./LoggerService";

@NgModule({
  declarations: [
    AppComponent,
    BooksPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    BetterLoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
