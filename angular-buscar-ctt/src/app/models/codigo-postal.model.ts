import { ICodigoPostal } from 'src/app/interfaces/codigo-portal.interface';

export class CodigoPostal implements ICodigoPostal {
  Id: number;
  CodigoDistrito: string;
  CodigoConcelho: string;
  CodigoLocalidade: string;
  NomeLocalidade: string;
  CodigoArteria: string;
  ArteriaTipo: string;
  PrimeiraPreposicao: string;
  ArteriaTitulo: string;
  SegundaPreposicao: string;
  ArteriaDesignacao: string;
  ArteriaInformacaoLocalZona: string;
  Troco: string;
  NumeroPorta: string;
  NomeCliente: string;
  NumeroCodigoPostal: string;
  NumeroExtensaoCodigoPostal: string;
  DesignacaoPostal: string;
  NomeDistrito: string;
  NomeConcelho: string;

  constructor() {
    this.Id = 0;
    this.CodigoDistrito = '';
    this.CodigoConcelho = '';
    this.CodigoLocalidade = '';
    this.NomeLocalidade = '';
    this.CodigoArteria = '';
    this.ArteriaTipo = '';
    this.PrimeiraPreposicao = '';
    this.ArteriaTitulo = '';
    this.SegundaPreposicao = '';
    this.ArteriaDesignacao = '';
    this.ArteriaInformacaoLocalZona = '';
    this.Troco = '';
    this.NumeroPorta = '';
    this.NomeCliente = '';
    this.NumeroCodigoPostal = '';
    this.NumeroExtensaoCodigoPostal = '';
    this.DesignacaoPostal = '';
    this.NomeConcelho = '';
    this.NomeDistrito = '';
  }
}
