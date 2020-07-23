import { Concelho } from './../Concelho';
import { Component, OnInit } from '@angular/core';
import { CttService } from '../CttService.service';

@Component({
  selector: 'app-search-concelho',
  templateUrl: './search-concelho.component.html',
  styleUrls: ['./search-concelho.component.css']
})
export class SearchConcelhoComponent implements OnInit {

  filtro: string;

  Concelhos: Concelho[];

  constructor(private cttService: CttService) { }

  ngOnInit(): void {
  }

  buscarConcelho(): void {
    this.cttService.buscarConcelho(this.filtro)
    .subscribe(data => { this.Concelhos = data; },
              error => { this.Concelhos = []; }
    );

  }
}
