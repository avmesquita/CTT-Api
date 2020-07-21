using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace convertCsvToSQLite.Entity
{
	/// <summary>
	/// CÓDIGO POSTAL
	/// Exemplo de Registo
	/// 11;14;50149;Castanheira do Ribatejo;50031411;Rua;;Dom;;António de Ataíde;;Cemitério;;;2600;607;CASTANHEIRA DO RIBATEJO
	/// CREATE TABLE `CodigoPostal` 
	/// ( 
	///     `CodigoDistrito` varchar NOT NULL,
	///     `CodigoConcelho` varchar NOT NULL,
	///     `CodigoLocalidade` varchar NOT NULL,
	///     `NomeLocalidade` varchar,
	///     `CodigoArteria` varchar,
	///     `ArteriaTipo` varchar,
	///     `PrimeiraPreposicao` varchar,
	///     `ArteriaTitulo` varchar,
	///     `SegundaPreposicao` varchar,
	///     `ArteriaDesignacao` varchar,
	///     `ArteriaInformacaoLocalZona` varchar,
	///     `Troco` varchar,
	///     `NumeroPorta` varchar,
	///     `NomeCliente` varchar,
	///     `NumeroCodigoPostal` varchar,
	///     `NumeroExtensaoCodigoPostal` varchar,
	///     `DesignacaoPostal` varchar,
	///     PRIMARY KEY(`CodigoLocalidade`) 
	///  )
	/// </summary>
	[Table("CodigoPostal")]
	public class CodigoPostal
	{
		/// <summary>
		/// 1) Designação: DD
		///    Conteúdo:   Código do Distrito
		///    Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string CodigoDistrito { get; set; }

		[NotMapped]
		public Distrito Distrito { get; set; }

		/// <summary>
		/// 2) Designação: CC
		///    Conteúdo:   Código do Concelho
		///    Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string CodigoConcelho { get; set; }

		[NotMapped]
		public Concelho Concelho { get; set; }

		/// <summary>
		/// 3) Designação: LLLL
		///	   Conteúdo:   Código da localidade
		///	   Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string CodigoLocalidade { get; set; }

		/// <summary>
		/// 4) Designação: LOCALIDADE
		///	   Conteúdo:   Nome da localidade
		///	   Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string NomeLocalidade { get; set; }

		/// <summary>
		/// 5) Designação: ART_COD
		///	   Conteúdo:   Código da Artéria
		///	   Tipo:       Alfa-numérico
		/// </summary>
		public string CodigoArteria { get; set; }

		/// <summary>
		/// 6) Designação: ART_TIPO
		///	   Conteúdo:   Artéria - Tipo(Rua, Praça, etc)
		///    Tipo:       Alfa-numérico
		/// </summary>
		public string ArteriaTipo { get; set; }

		/// <summary>
		/// 7) Designação: PRI_PREP
		///	   Conteúdo:   Primeira preposição
		///	   Tipo:	   Alfa-numérico
		/// </summary>
		public string PrimeiraPreposicao { get; set; }

		/// <summary>
		/// 8) Designação: ART_TITULO
		///    Conteúdo:   Artéria - Titulo(Doutor, Eng.º, Professor, etc)
		///    Tipo:       Alfa-numérico
		/// </summary>
		public string ArteriaTitulo { get; set; }

		/// <summary>
		/// 9) Designação: SEG_PREP
		///    Conteúdo:   Segunda preposição
		///	   Tipo:       Alfa-numérico
		/// </summary>
		public string SegundaPreposicao { get; set; }

		/// <summary>
		/// 10) Designação: ART_DESIG
		///	    Conteúdo:   Artéria - Designação
		///	    Tipo:       Alfa-numérico
		/// </summary>
		public string ArteriaDesignacao { get; set; }

		/// <summary>
		/// 11) Designação: ART_LOCAL
		///	    Conteúdo:   Artéria - Informação do Local/Zona
		///	    Tipo:       Alfa-numérico
		/// </summary>
		public string ArteriaInformacaoLocalZona { get; set; }

		/// <summary>
		/// 12) Designação: TROÇO
		///     Conteúdo:   Descrição do troço
		///	    Tipo:       Alfa-numérico	
		/// </summary>
		public string Troco { get; set; }

		/// <summary>
		/// 13) Designação: PORTA
		///     Conteúdo:   Número da porta do cliente
		///     Tipo:       Alfa-numérico, vazio para códigos postais geográficos(1)
		/// </summary>
		public string NumeroPorta { get; set; }

		/// <summary>
		/// 14) Designação: CLIENTE
		///		Conteúdo:   Nome do cliente
		///		Tipo:       Alfa-numérico, vazio para códigos postais geográficos(1)
		/// </summary>
		public string NomeCliente { get; set; }

		/// <summary>
		/// 15) Designação: CP4
		///		Conteúdo:   N.º do código postal
		///	    Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string NumeroCodigoPostal { get; set; }

		/// <summary>
		/// 16) Designação: CP3
		///     Conteúdo:   Extensão do n.º do código postal
		///     Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string NumeroExtensaoCodigoPostal { get; set; }

		/// <summary>
		/// 17) Designação: CPALF
		///     Conteúdo:   Designação Postal
		///     Tipo:       Alfa-numérico, sempre preenchido
		/// </summary>
		public string DesignacaoPostal { get; set; }
	}
}
