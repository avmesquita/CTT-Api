
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace convertCsvToSQLite.Entity
{
	/// <summary>
	/// CREATE TABLE `Concelho` ( `Codigo` TEXT NOT NULL, `CodigoDistrito` TEXT NOT NULL, `Nome` TEXT, PRIMARY KEY(`Codigo`) )
	/// </summary>
	[Table("Concelho")]
	public class Concelho
	{
		public string Codigo { get; set; }

		public string Nome { get; set; }

		public string CodigoDistrito { get; set; }

		[NotMapped]         
		public Distrito Distrito { get; set; }
	}
}
