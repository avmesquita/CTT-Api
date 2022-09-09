import { Component } from '@angular/core';
import { IApartado } from 'src/app/interfaces/apartado.interface';
import { CttService } from 'src/app/services/CttService.service';

@Component({
  selector: 'app-search-apartado',
  templateUrl: './search-apartado.component.html',
  styleUrls: ['./search-apartado.component.css']
})
export class SearchApartadoComponent {

  filtro: string;

  Apartados: IApartado[];

  constructor(private cttService: CttService) { }

  buscarApartado(): void {
    this.cttService.buscarApartado(this.filtro)
    .subscribe(data => { this.Apartados = data; },
              error => { this.Apartados = []; }
    );
  }
}
