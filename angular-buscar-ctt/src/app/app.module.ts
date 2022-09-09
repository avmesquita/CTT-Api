import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchCttComponent } from './components/search-ctt/search-ctt.component';
import { SearchDistritoComponent } from './components/search-distrito/search-distrito.component';
import { SearchConcelhoComponent } from 'src/app/components/search-concelho/search-concelho.component';
import { SearchApartadoComponent } from 'src/app/components/search-apartado/search-apartado.component';
import { SearchCodigoPostalComponent } from 'src/app/components/search-codigo-postal/search-codigo-postal.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';

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
