import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
   imports: [
    TableModule,
    InputTextModule,
    RadioButtonModule
   ],
   exports: [
    TableModule,
    InputTextModule,
    RadioButtonModule
   ]   
})
export class PrimeNGModule { }
