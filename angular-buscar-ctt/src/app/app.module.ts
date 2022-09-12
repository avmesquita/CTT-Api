import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchDistritoComponent } from './components/search-distrito/search-distrito.component';
import { SearchConcelhoComponent } from 'src/app/components/search-concelho/search-concelho.component';
import { SearchApartadoComponent } from 'src/app/components/search-apartado/search-apartado.component';
import { SearchCodigoPostalComponent } from 'src/app/components/search-codigo-postal/search-codigo-postal.component';
import { MessagesComponent } from 'src/app/components/messages/messages.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingComponent } from './components/loading/loading.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
