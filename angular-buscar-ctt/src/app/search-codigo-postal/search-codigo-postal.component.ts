import { Component, OnInit } from '@angular/core';
import { CttService } from '../CttService.service';
import { CodigoPostal } from '../CodigoPostal';

@Component({
  selector: 'app-search-codigo-postal',
  templateUrl: './search-codigo-postal.component.html',
  styleUrls: ['./search-codigo-postal.component.css']
})
export class SearchCodigoPostalComponent implements OnInit {

  filtro: string;

  CodigosPostais: CodigoPostal[];

  constructor(private cttService: CttService) { }

  ngOnInit(): void {
  }

  buscarCodigoPostal(): void {
    this.cttService.buscarCodigoPostal(this.filtro)
    .subscribe(data => { this.CodigosPostais = data; },
              error => { this.CodigosPostais = []; }
    );
  }
}
