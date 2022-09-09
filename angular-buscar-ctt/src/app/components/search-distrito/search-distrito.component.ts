import { Component } from '@angular/core';
import { CttService } from '../../services/CttService.service';
import { IDistrito } from 'src/app/interfaces/distrito.interface';

@Component({
  selector: 'app-search-distrito',
  templateUrl: './search-distrito.component.html',
  styleUrls: ['./search-distrito.component.css']
})
export class SearchDistritoComponent {

  filtro: string;

  Distritos: IDistrito[];

  constructor(private cttService: CttService) { }

  buscarDistrito(): void {
    const params = (this.filtro === undefined ? '' : this.filtro );

    this.cttService.buscarDistrito(params)
    .subscribe(data => { this.Distritos = data; },
               error => { this.Distritos = []; }
    );
  }
}
