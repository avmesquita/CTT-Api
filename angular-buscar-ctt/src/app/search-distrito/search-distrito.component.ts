import { Distrito } from './../Distrito';
import { Component, OnInit } from '@angular/core';
import { CttService } from '../CttService.service';

@Component({
  selector: 'app-search-distrito',
  templateUrl: './search-distrito.component.html',
  styleUrls: ['./search-distrito.component.css']
})
export class SearchDistritoComponent implements OnInit {

  filtro: string;

  Distritos: Distrito[];

  constructor(private cttService: CttService)
  { }

  ngOnInit(): void {
  }

  buscarDistrito(): void {

    const params = (this.filtro === undefined ? '' : this.filtro );

    this.cttService.buscarDistrito(params)
    .subscribe(data => { this.Distritos = data; },
               error => { this.Distritos = []; }
    );
  }
}
