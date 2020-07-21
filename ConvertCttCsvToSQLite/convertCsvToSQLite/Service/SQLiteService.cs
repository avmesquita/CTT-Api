using System;
using System.Collections.Generic;
using convertCsvToSQLite.Entity;
using System.Data.SQLite;
using System.Data.Common;

namespace convertCsvToSQLite.Service
{
	public class SQLiteService : IDisposable
	{
		public SQLiteConnection Connection { get; set; }

		public SQLiteService()
		{
			if (this.Connection == null || this.Connection.State == System.Data.ConnectionState.Closed)
			{
				string sqlitedb = @".\Database\CTTPortugal.db3";

				SQLiteConnectionStringBuilder connSB = new SQLiteConnectionStringBuilder
				{
					DataSource = sqlitedb,
					FailIfMissing = false,
					Version = 3,
					LegacyFormat = true,
					Pooling = true,
					JournalMode = SQLiteJournalModeEnum.Persist
				};

				SQLiteConnection sqlite = new SQLiteConnection(connSB.ConnectionString);

				try
				{
					sqlite.Open();
				}
				catch (Exception ex)
				{
					throw new Exception("Error openning database", ex);
				}

				this.Connection = sqlite;
			}
		}

		~SQLiteService()
		{
			if (this.Connection.State == System.Data.ConnectionState.Open)
				this.Connection.Close();
		}

		public void GravarDistritos(IList<Distrito> distritos)
		{
			try
			{
				foreach (var distrito in distritos)
				{
					string sql = string.Format("INSERT INTO Distrito (Codigo, Nome) VALUES ('{0}','{1}') ",
						distrito.Codigo.Replace("'", ""),
						distrito.Nome.Replace("'", ""));

					var cmdLite = new SQLiteCommand(sql, this.Connection);

					cmdLite.ExecuteNonQuery();
				}
			}
			catch (Exception ex)
			{
				throw new Exception("Error writing Distritos", ex);
			}
		}

		public void GravarConcelhos(IList<Concelho> concelhos)
		{
			try
			{
				foreach (var concelho in concelhos)
				{
					string sql = string.Format("INSERT INTO Concelho (CodigoDistrito, Codigo, Nome) VALUES ('{0}','{1}','{2}') ",
						concelho.CodigoDistrito.Replace("'", ""),
						concelho.Codigo.Replace("'", ""),
						concelho.Nome.Replace("'", ""));

					var cmdLite = new SQLiteCommand(sql, this.Connection);

					cmdLite.ExecuteNonQuery();
				}
			}
			catch (Exception ex)
			{
				throw new Exception("Error writing Concelhos", ex);
			}
		}


		public void GravarCodigosPostais(IList<CodigoPostal> codigosPostais)
		{
			try
			{
				foreach (var codigoPostal in codigosPostais)
				{
					string sql = string.Format("INSERT INTO CodigoPostal (CodigoDistrito, CodigoConcelho, CodigoLocalidade, NomeLocalidade, CodigoArteria, ArteriaTipo, PrimeiraPreposicao, ArteriaTitulo, SegundaPreposicao, ArteriaDesignacao, ArteriaInformacaoLocalZona, Troco, NumeroPorta, NomeCliente, NumeroCodigoPostal, NumeroExtensaoCodigoPostal, DesignacaoPostal) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}','{9}','{10}','{11}','{12}','{13}','{14}','{15}','{16}') ",
												codigoPostal.Concelho.Distrito.Codigo,
												codigoPostal.Concelho.Codigo,
												codigoPostal.CodigoLocalidade.Replace("'", ""),
												codigoPostal.NomeLocalidade.Replace("'", ""),
												codigoPostal.CodigoArteria.Replace("'", ""),
												codigoPostal.ArteriaTipo.Replace("'", ""),
												codigoPostal.PrimeiraPreposicao.Replace("'", ""),
												codigoPostal.ArteriaTitulo.Replace("'", ""),
												codigoPostal.SegundaPreposicao.Replace("'", ""),
												codigoPostal.ArteriaDesignacao.Replace("'", ""),
												codigoPostal.ArteriaInformacaoLocalZona.Replace("'", ""),
												codigoPostal.Troco.Replace("'", ""),
												codigoPostal.NumeroPorta.Replace("'", ""),
												codigoPostal.NomeCliente.Replace("'", ""),
												codigoPostal.NumeroCodigoPostal.Replace("'", ""),
												codigoPostal.NumeroExtensaoCodigoPostal.Replace("'", ""),
												codigoPostal.DesignacaoPostal.Replace("'", ""));

					var cmdLite = new SQLiteCommand(sql, this.Connection);

					cmdLite.ExecuteNonQuery();
				}
			}
			catch (Exception ex)
			{
				throw new Exception("Error writing Códigos Postais", ex);
			}
		}

		public void GravarApartados(IList<Apartado> apartados)
		{
			try
			{
				foreach (var apartado in apartados)
				{
					string sql = string.Format("INSERT INTO Apartado (PostalOfficeIdentification, FirstPOBox, LastPOBox, PostalCode, PostalCodeExtension, PostalName, PostalCodeSpecial, PostalCodeSpecialExtension, PostalNameSpecial) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}') ",
												apartado.PostalOfficeIdentification.Replace("'", ""),
												apartado.FirstPOBox.Replace("'", ""),
												apartado.LastPOBox.Replace("'", ""),
												apartado.PostalCode.Replace("'", ""),
												apartado.PostalCodeExtension.Replace("'", ""),
												apartado.PostalName.Replace("'", ""),
												apartado.PostalCodeSpecial.Replace("'", ""),
												apartado.PostalCodeSpecialExtension.Replace("'", ""),
												apartado.PostalNameSpecial.Replace("'", ""));

					var cmdLite = new SQLiteCommand(sql, this.Connection);

					cmdLite.ExecuteNonQuery();
				}
			}
			catch (Exception ex)
			{
				throw new Exception("Error writing Apartados", ex);
			}
		}

		public void Dispose()
		{
			if (this.Connection != null && this.Connection.State == System.Data.ConnectionState.Open)
				this.Connection.Close();
		}
	}
}
