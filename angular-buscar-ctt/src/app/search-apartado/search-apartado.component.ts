import { Component, OnInit } from '@angular/core';
import { CttService } from '../CttService.service';
import { Apartado } from '../Apartado';

@Component({
  selector: 'app-search-apartado',
  templateUrl: './search-apartado.component.html',
  styleUrls: ['./search-apartado.component.css']
})
export class SearchApartadoComponent implements OnInit {

  filtro: string;

  Apartados: Apartado[];

  constructor(private cttService: CttService) { }

  ngOnInit(): void {
  }

  buscarApartado(): void {
    this.cttService.buscarApartado(this.filtro)
    .subscribe(data => { this.Apartados = data; },
              error => { this.Apartados = []; }
    );
  }
}
