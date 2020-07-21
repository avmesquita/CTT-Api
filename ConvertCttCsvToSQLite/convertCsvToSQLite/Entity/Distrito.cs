using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace convertCsvToSQLite.Entity
{
	/// <summary>
	/// CREATE TABLE "Distrito" ( `Codigo` varchar NOT NULL, `Nome` varchar, PRIMARY KEY(`Codigo`) )
	/// </summary>
	[Table("Distrito")]
	public class Distrito
	{				
		public string Codigo { get; set; }
		public string Nome { get; set; }
	}
}
