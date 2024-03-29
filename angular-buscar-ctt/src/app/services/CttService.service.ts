import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './MessageService.service';
import { IApartado } from 'src/app/interfaces/apartado.interface';
import { ICodigoPostal } from 'src/app/interfaces/codigo-portal.interface';
import { IConcelho } from 'src/app/interfaces/concelho.interface';
import { IDistrito } from 'src/app/interfaces/distrito.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CttService {

  CttResults: [];

constructor(
  private http: HttpClient,
  private msgService: MessageService)
  {
  }

  buscarDistrito(filter: string): any {
    try
    {
      const endpoint = environment.apiUrl + '/api/v1/distrito/' + filter;
      return this.http.get<IDistrito[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarConcelho(filter: string): any {
    try
    {
      const endpoint = environment.apiUrl + '/api/v1/concelho/' + filter;
      return this.http.get<IConcelho[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarCodigoPostal(filter: string): any {
    try
    {
      const endpoint = environment.apiUrl + '/api/v1/codigopostal/' + filter;
      return this.http.get<ICodigoPostal[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarApartado(filter: string): any {
    try
    {
      const endpoint = environment.apiUrl + '/api/v1/apartado/' + filter;
      return this.http.get<IApartado[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

  buscarMorada(filter: string): any {
    try
    {
      const endpoint = environment.apiUrl + '/api/v1/morada/' + filter;
      return this.http.get<ICodigoPostal[]>(endpoint);
    } catch (e) {
      this.msgService.add(e);
    }
  }

}
