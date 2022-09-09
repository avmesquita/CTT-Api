import { IDistrito } from 'src/app/interfaces/distrito.interface';

export class Distrito implements IDistrito {
  Id: number;
  Codigo: string;
  Nome: string;

  constructor() {
    this.Id = 0;
    this.Codigo = '';
    this.Nome = '';
  }
}
