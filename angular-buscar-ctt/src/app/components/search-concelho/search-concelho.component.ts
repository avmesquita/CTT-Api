import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IConcelho } from 'src/app/interfaces/concelho.interface';
import { CttService } from 'src/app/services/CttService.service';
import { MessageService } from 'src/app/services/MessageService.service';

@Component({
  selector: 'app-search-concelho',
  templateUrl: './search-concelho.component.html',
  styleUrls: ['./search-concelho.component.css']
})
export class SearchConcelhoComponent {

  filtro: string;
  Concelhos: IConcelho[];
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private cttService: CttService,
              private msgService: MessageService) { }

  buscarConcelho(): void {
    this.loading.next(true);
    const params = (this.filtro === undefined ? '' : this.filtro );
    this.cttService.buscarConcelho(params).subscribe(
      (data: IConcelho[]) => {
         this.Concelhos = data; 
         this.loading.next(false);
      },
      error => { 
        this.Concelhos = [];
        this.msgService.add(error.message ?? error);
        this.loading.next(false);
      }
    );
  }
}
