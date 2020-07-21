CREATE TABLE "Distrito" 
( 
   `Codigo` varchar NOT NULL, 
   `Nome` varchar NOT NULL, 
   `Id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT 
)

CREATE TABLE "Concelho" 
( 
   `Codigo` varchar NOT NULL, 
   `CodigoDistrito` varchar NOT NULL, 
   `Nome` varchar NOT NULL, 
   `Id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT 
)


CREATE TABLE "CodigoPostal" 
( 
   `CodigoDistrito` varchar NOT NULL, 
   `CodigoConcelho` varchar NOT NULL, 
   `CodigoLocalidade` varchar NOT NULL, 
   `NomeLocalidade` varchar, 
   `CodigoArteria` varchar, 
   `ArteriaTipo` varchar, 
   `PrimeiraPreposicao` varchar, 
   `ArteriaTitulo` varchar, 
   `SegundaPreposicao` varchar, 
   `ArteriaDesignacao` varchar, 
   `ArteriaInformacaoLocalZona` varchar, 
   `Troco` varchar, 
   `NumeroPorta` varchar, 
   `NomeCliente` varchar, 
   `NumeroCodigoPostal` varchar NOT NULL, 
   `NumeroExtensaoCodigoPostal` varchar NOT NULL, 
   `DesignacaoPostal` varchar, 
   `Id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT 
)

CREATE TABLE "Apartado" 
( 
   `Id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
   `PostalOfficeIdentification` varchar, 
   `FirstPOBox` varchar, 
   `LastPOBox` varchar, 
   `PostalCode` varchar, 
   `PostalCodeExtension` varchar, 
   `PostalName` varchar, 
   `PostalCodeSpecial` varchar, 
   `PostalCodeSpecialExtension` varchar, 
   `PostalNameSpecial` varchar 
)
