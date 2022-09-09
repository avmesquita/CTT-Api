import { IConcelho } from 'src/app/interfaces/concelho.interface';

export class Concelho implements IConcelho {
  Id: number;
  Codigo: string;
  CodigoDistrito: string;
  Nome: string;

  constructor() {
    this.Id = 0;
    this.Codigo = '';
    this.CodigoDistrito = '';
    this.Nome = '';  
  }
}
