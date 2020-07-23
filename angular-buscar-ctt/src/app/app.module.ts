import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchCttComponent } from './search-ctt/search-ctt.component';
import { MessagesComponent } from './messages/messages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDistritoComponent } from './search-distrito/search-distrito.component';
import { SearchConcelhoComponent } from './search-concelho/search-concelho.component';
import { SearchApartadoComponent } from './search-apartado/search-apartado.component';
import { SearchCodigoPostalComponent } from './search-codigo-postal/search-codigo-postal.component';


@NgModule({
   declarations: [
      AppComponent,
      SearchCttComponent,
      MessagesComponent,
      SearchDistritoComponent,
      SearchConcelhoComponent,
      SearchApartadoComponent,
      SearchCodigoPostalComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
