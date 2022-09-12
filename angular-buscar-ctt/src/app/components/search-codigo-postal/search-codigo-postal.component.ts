import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICodigoPostal } from 'src/app/interfaces/codigo-portal.interface';
import { CttService } from 'src/app/services/CttService.service';
import { MessageService } from 'src/app/services/MessageService.service';

@Component({
  selector: 'app-search-codigo-postal',
  templateUrl: './search-codigo-postal.component.html',
  styleUrls: ['./search-codigo-postal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCodigoPostalComponent {
  CodigosPostais: ICodigoPostal[] = [];

  filtro: string;

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private cttService: CttService,
              private msgService: MessageService) { }

  buscarCodigoPostal(): void {
    this.loading.next(true);
    this.cttService.buscarCodigoPostal(this.filtro).subscribe(      
      (data: any) => {         
        this.CodigosPostais = data;
        this.loading.next(false);
      },
      error => { 
        this.msgService.add(error.message ?? error);        
        this.CodigosPostais = []; 
        this.loading.next(false);
      }
    );
  }
}
