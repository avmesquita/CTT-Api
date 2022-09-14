import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IApartado } from 'src/app/interfaces/apartado.interface';
import { CttService } from 'src/app/services/CttService.service';
import { MessageService } from 'src/app/services/MessageService.service';

@Component({
  selector: 'app-search-apartado',
  templateUrl: './search-apartado.component.html',
  styleUrls: ['./search-apartado.component.css']
})
export class SearchApartadoComponent {

  filtro: string;

  Apartados: IApartado[];
  
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private cttService: CttService,
              private msgService: MessageService) { }

  buscarApartado(): void {
    this.loading.next(true);    
    this.cttService.buscarApartado(this.filtro)
    .subscribe(
      (data: any) => { 
        this.Apartados = data; 
        this.loading.next(false);
      },
      error => { 
        this.Apartados = []; 
        this.msgService.add(error.message ?? error);        
        this.loading.next(false);
      }
    );
  }
}
