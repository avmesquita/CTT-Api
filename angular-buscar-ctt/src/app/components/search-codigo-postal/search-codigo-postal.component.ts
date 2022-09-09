import { Component } from '@angular/core';
import { ICodigoPostal } from 'src/app/interfaces/codigo-portal.interface';
import { CttService } from 'src/app/services/CttService.service';

@Component({
  selector: 'app-search-codigo-postal',
  templateUrl: './search-codigo-postal.component.html',
  styleUrls: ['./search-codigo-postal.component.css']
})
export class SearchCodigoPostalComponent {

  filtro: string;

  CodigosPostais: ICodigoPostal[];

  constructor(private cttService: CttService) { }

  buscarCodigoPostal(): void {
    this.cttService.buscarCodigoPostal(this.filtro)
    .subscribe(data => { this.CodigosPostais = data; },
              error => { this.CodigosPostais = []; }
    );
  }
}
