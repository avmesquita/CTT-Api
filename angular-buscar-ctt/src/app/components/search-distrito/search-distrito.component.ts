import { Component } from '@angular/core';
import { CttService } from '../../services/CttService.service';
import { IDistrito } from 'src/app/interfaces/distrito.interface';
import { MessageService } from 'src/app/services/MessageService.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-distrito',
  templateUrl: './search-distrito.component.html',
  styleUrls: ['./search-distrito.component.css']
})
export class SearchDistritoComponent {

  filtro: string;

  Distritos: IDistrito[];
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private cttService: CttService,
              private msgService: MessageService) { }

  buscarDistrito(): void {
    this.loading.next(true);    
    this.cttService.buscarDistrito(this.filtro)
        .subscribe( (data: any) => { 
          this.Distritos = data; 
          this.loading.next(false);
        },
        error => {
          this.Distritos = []; 
          this.msgService.add(error.message ?? error);
          this.loading.next(false);
        }
    );
  }
}
