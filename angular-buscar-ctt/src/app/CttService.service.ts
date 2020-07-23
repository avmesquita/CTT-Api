import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './MessageService.service';
import { Distrito } from './Distrito';
import { Concelho } from './Concelho';
import { CodigoPostal } from './CodigoPostal';
import { Apartado } from './Apartado';

@Injectable({
  providedIn: 'root'
})

export class CttService {

  private prodServiceUrl = 'https://ctt-api-service.herokuapp.com';
  private devServiceUrl = 'http://localhost:10000';

  ServiceURL = '';

  CttResults: [];

constructor(
  private http: HttpClient,
  private msgService: MessageService)
  {
     this.ServiceURL = this.prodServiceUrl;
  }

  buscarDistrito(filter: string): any {
    try
    {
      const endpoint = this.ServiceURL + '/api/v1/distrito/' + filter;
      return this.http.get<Distrito[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarConcelho(filter: string): any {
    try
    {
      const endpoint = this.ServiceURL + '/api/v1/concelho/' + filter;
      return this.http.get<Concelho[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarCodigoPostal(filter: string): any {
    try
    {
      const endpoint = this.ServiceURL + '/api/v1/codigopostal/' + filter;
      return this.http.get<CodigoPostal[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarApartado(filter: string): any {
    try
    {
      const endpoint = this.ServiceURL + '/api/v1/apartado/' + filter;
      return this.http.get<Apartado[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }
}
