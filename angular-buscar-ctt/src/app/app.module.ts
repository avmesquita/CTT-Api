import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { SearchDistritoComponent } from 'src/app/components/search-distrito/search-distrito.component';
import { SearchConcelhoComponent } from 'src/app/components/search-concelho/search-concelho.component';
import { SearchApartadoComponent } from 'src/app/components/search-apartado/search-apartado.component';
import { SearchCodigoPostalComponent } from 'src/app/components/search-codigo-postal/search-codigo-postal.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';

import { AngularMaterialModule } from 'src/app/modules/angular-material.module';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@NgModule({
   declarations: [
      AppComponent,      
      MessagesComponent,
      SearchDistritoComponent,
      SearchConcelhoComponent,
      SearchApartadoComponent,
      SearchCodigoPostalComponent,
      LoadingComponent
   ],
   imports: [
      BrowserModule,
      AngularMaterialModule,
      PrimeNGModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,      
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
