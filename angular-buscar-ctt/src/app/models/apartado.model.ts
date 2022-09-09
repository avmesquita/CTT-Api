import { IApartado } from 'src/app/interfaces/apartado.interface';

export class Apartado implements IApartado {
  Id: number;  
  PostalOfficeIdentification: string;
  FirstPOBox: string;
  LastPOBox: string;
  PostalCode: string;
  PostalCodeExtension: string;
  PostalName: string;
  PostalCodeSpecial: string;
  PostalCodeSpecialExtension: string;
  PostalNameSpecial: string;

  constructor() {
    this.Id = 0;
    this.PostalOfficeIdentification = '';
    this.FirstPOBox = '';
    this.LastPOBox = '';
    this.PostalCode = '';
    this.PostalCodeExtension = '';
    this.PostalName = '';
    this.PostalCodeSpecial = '';
    this.PostalCodeSpecialExtension = '';
    this.PostalNameSpecial = '';  
  }
}
