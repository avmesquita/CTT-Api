using convertCsvToSQLite.Entity;
using convertCsvToSQLite.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace convertCsvToSQLite
{
	class Program
	{
		private static SQLiteService dbService;

		static void Main(string[] args)
		{
			var distritos = LoadDistritos();
			var concelhos = LoadConcelhos(distritos);
			var codigosPostais = LoadTodosCP(distritos, concelhos);
			var apartados = LoadTodosApartados(distritos, concelhos);

			dbService = new Service.SQLiteService();

			Console.WriteLine("Writing Distritos...");
			dbService.GravarDistritos(distritos);

			Console.WriteLine("Writing Concelhos...");
			dbService.GravarConcelhos(concelhos);

			Console.WriteLine("Writing Codigos Postais...");
			dbService.GravarCodigosPostais(codigosPostais);

			Console.WriteLine("Writing Apartados...");
			dbService.GravarApartados(apartados);

			dbService.Dispose();

			Console.WriteLine("Done.");
		}

		#region [ OBJECTS LOAD FROM TEXT FILE ] 

		private static List<Distrito> LoadDistritos()
		{
			Console.Write("Loading Distritos...");

			var listaDistritos = new List<Distrito>();

			string dados = System.IO.File.ReadAllText(@".\todos_cp\distritos.txt", Encoding.UTF7);

			var arrayDados = dados.Split("\r\n");

			foreach (var item in arrayDados)
			{
				if (!string.IsNullOrEmpty(item))
					listaDistritos.Add(new Distrito() 
					{ 
						Codigo = item.Split(";")[0], 
						Nome = item.Split(";")[1] 
					});
			}

			Console.WriteLine(" {0} loaded.", listaDistritos.Count());

			return listaDistritos.OrderBy(x => x.Codigo).ToList();
		}

		private static List<Concelho> LoadConcelhos(List<Distrito> distritos)
		{
			Console.Write("Loading Concelhos...");

			var listaConcelhos = new List<Concelho>();

			string dados = System.IO.File.ReadAllText(@".\todos_cp\concelhos.txt", Encoding.UTF7);

			var arrayDados = dados.Split("\r\n");

			foreach (var item in arrayDados)
			{
				if (!string.IsNullOrEmpty(item))
				{
					Distrito distrito = distritos.Where(x => x.Codigo == item.Split(";")[0]).FirstOrDefault();
					listaConcelhos.Add(new Concelho() 
					{ 
						Codigo = item.Split(";")[1], 
						Nome = item.Split(";")[2], 
						CodigoDistrito = distrito.Codigo, 
						Distrito = distrito 
					});
				}
			}

			Console.WriteLine(" {0} loaded.", listaConcelhos.Count());

			return listaConcelhos.OrderBy(x => x.CodigoDistrito).ThenBy(x => x.Codigo).ToList();
		}

		private static List<CodigoPostal> LoadTodosCP(List<Distrito> distritos, List<Concelho> concelhos)
		{
			Console.Write("Loading Codigos Postais...");

			var listaCodigosPostais = new List<CodigoPostal>();

			string dados = System.IO.File.ReadAllText(@".\todos_cp\todos_cp.txt", Encoding.UTF7);

			var arrayDados = dados.Split("\r\n");

			foreach (var item in arrayDados)
			{
				if (!string.IsNullOrEmpty(item))
				{
					var distrito = distritos.Where(x => x.Codigo == item.Split(";")[0]).FirstOrDefault();
					var concelho = concelhos.Where(x => x.Distrito.Codigo == distrito.Codigo &&
												   x.Codigo == item.Split(";")[1]).FirstOrDefault();

					var cp = new CodigoPostal()
					{
						Distrito = distrito,
						CodigoDistrito = distrito.Codigo,
						Concelho = concelho,
						CodigoConcelho = concelho.Codigo,
						CodigoLocalidade = item.Split(";")[2],
						NomeLocalidade = item.Split(";")[3],
						CodigoArteria = item.Split(";")[4],
						ArteriaTipo = item.Split(";")[5],
						PrimeiraPreposicao = item.Split(";")[6],
						ArteriaTitulo = item.Split(";")[7],
						SegundaPreposicao = item.Split(";")[8],
						ArteriaDesignacao = item.Split(";")[9],
						ArteriaInformacaoLocalZona = item.Split(";")[10],
						Troco = item.Split(";")[11],
						NumeroPorta = item.Split(";")[12],
						NomeCliente = item.Split(";")[13],
						NumeroCodigoPostal = item.Split(";")[14],
						NumeroExtensaoCodigoPostal = item.Split(";")[15],
						DesignacaoPostal = item.Split(";")[16]
					};

					listaCodigosPostais.Add(cp);
				}
			}

			Console.WriteLine(" {0} loaded.", listaCodigosPostais.Count());

			return listaCodigosPostais.OrderBy(x => x.CodigoDistrito).ThenBy(x => x.CodigoConcelho).ToList();
		}

		private static List<Apartado> LoadTodosApartados(List<Distrito> distritos, List<Concelho> concelhos)
		{
			Console.Write("Loading Apartados...");

			var listaApartados = new List<Apartado>();

			string dados = System.IO.File.ReadAllText(@".\todos_apartados\todos_aps.txt", Encoding.UTF7);

			var arrayDados = dados.Split("\r\n");

			foreach (var item in arrayDados)
			{
				if (!string.IsNullOrEmpty(item))
				{
					var apartado = new Apartado()
					{
						PostalOfficeIdentification = item.Split(";")[0],
						FirstPOBox = item.Split(";")[1],
						LastPOBox = item.Split(";")[2],
						PostalCode = item.Split(";")[3],
						PostalCodeExtension = item.Split(";")[4],
						PostalName = item.Split(";")[5],
						PostalCodeSpecial = item.Split(";")[6],
						PostalCodeSpecialExtension = item.Split(";")[7],
						PostalNameSpecial = item.Split(";")[8]
					};

					listaApartados.Add(apartado);
				}
			}

			Console.WriteLine(" {0} loaded.", listaApartados.Count());

			return listaApartados;
		}

		#endregion

	}
}
