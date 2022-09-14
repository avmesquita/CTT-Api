import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
   imports: [
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule
   ],
   exports: [
      MatCardModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule
   ]   
})
export class AngularMaterialModule { }
