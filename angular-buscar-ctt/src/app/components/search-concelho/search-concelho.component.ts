import { Component } from '@angular/core';
import { IConcelho } from 'src/app/interfaces/concelho.interface';
import { CttService } from 'src/app/services/CttService.service';

@Component({
  selector: 'app-search-concelho',
  templateUrl: './search-concelho.component.html',
  styleUrls: ['./search-concelho.component.css']
})
export class SearchConcelhoComponent {

  filtro: string;
  Concelhos: IConcelho[];

  constructor(private cttService: CttService) { }

  buscarConcelho(): void {
    this.cttService.buscarConcelho(this.filtro)
    .subscribe(data => { this.Concelhos = data; },
              error => { this.Concelhos = []; }
    );
  }
}
