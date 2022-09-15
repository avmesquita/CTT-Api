const port = process.env.PORT || 10000;

const express = require('express');
const bodyParser = require('body-parser');

const knex = require('knex')({
  client: 'sqlite3',
  connection: { filename: './CTTPortugal.db3' },
  useNullAsDefault: true
});

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

var cors = require('cors');
const { on } = require('nodemon');
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/distrito/:filter', (req, res) => {
	
    const filter = req.params.filter;
		
	if (filter !== '' && filter !== undefined && filter !== 'undefined' && filter !== {filter} && filter !== '{filter}') {
		list = () =>  knex('Distrito').select('Id','Codigo','Nome')
	                   .orWhere('Nome', 'like', '%'+filter+'%');
	} else {
		list = () =>  knex('Distrito').select('Id','Codigo','Nome')
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

// USING KNEX RAW TO EXECUTE A QUERY
/*
app.get('/api/v1/concelho/:filter', (req, res) => {

	const filter = req.params.filter;
	const queryJoin = "SELECT CNCLH.Id, CNCLH.CodigoDistrito, CNCLH.Codigo, CNCLH.Nome, DSTRT.Nome as Distrito " +
					  "FROM Concelho CNCLH " +
					  "       INNER JOIN Distrito DSTRT "
					  "         ON DSTRT.Codigo = CNCLH.CodigoDistrito ";

	if (filter !== '' && filter !== undefined && filter !== 'undefined' && filter !== {filter} && filter !== '{filter}') {
		queryJoin = queryJoin + "WHERE Nome like '%" + filter + "%' ";
	}
	list = () => knex.raw(queryJoin);
	
	list()
	.then(data => res.json(data)).catch(console.error);
})
*/

// USING KNEX STRUCTURE (TOO FASTER THAN EXECUTE A QUERY)
app.get('/api/v1/concelho/:filter', (req, res) => {

	const filter = req.params.filter;

	if (filter !== '' && filter !== undefined && filter !== 'undefined' && filter !== {filter} && filter !== '{filter}') {
		list = () =>  knex('Concelho')
					   .innerJoin("Distrito","Distrito.Codigo","Concelho.CodigoDistrito")
					   .select('Concelho.Id','Concelho.CodigoDistrito','Concelho.Codigo','Concelho.Nome', 'Distrito.Nome as NomeDistrito')	   						
					   .orWhere('Nome', 'like', '%'+filter+'%');
	} else {
		list = () =>  knex('Concelho')
					   .innerJoin("Distrito","Distrito.Codigo","Concelho.CodigoDistrito")	
					   .select('Concelho.Id','Concelho.CodigoDistrito','Concelho.Codigo','Concelho.Nome', 'Distrito.Nome as NomeDistrito');
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/apartado/:filter', (req, res) => {

	const filter = req.params.filter;

	if (filter !== '' && filter !== undefined && filter !== 'undefined' && filter !== {filter} && filter !== '{filter}') {
		list = () =>  knex
					   	.select('Id','PostalOfficeIdentification','FirstPOBox','LastPOBox',
							   'PostalCode','PostalCodeExtension','PostalName','PostalCodeSpecial',
							   'PostalCodeSpecialExtension','PostalNameSpecial')
					   	.from('Apartado')
					   	.where('PostalCode', 'like', '%'+filter+'%')
					   	.orWhere('FirstPOBox', 'like', '%'+filter+'%')
					   	.orWhere('LastPOBox', 'like', '%'+filter+'%')
					   	.orWhere('PostalCode', 'like', '%'+filter+'%')
					   	.orWhere('PostalName', 'like', '%'+filter+'%')
					   	.orWhere('PostalNameSpecial', 'like', '%'+filter+'%');					   
	} else {
		list = () =>  knex
						.select('Id','PostalOfficeIdentification','FirstPOBox','LastPOBox',
								'PostalCode','PostalCodeExtension','PostalName','PostalCodeSpecial',
								'PostalCodeSpecialExtension','PostalNameSpecial')
						.from('Apartado')
	}
	
	list()
	.then(data => res.json(data))
});

app.get('/api/v1/codigopostal/:filter', (req, res) => {

	const filter = req.params.filter;

	let cp = undefined;
	let ext = undefined;

	if (filter !== {filter} && filter !== '{filter}') {
	  cp = filter.split('-')[0];
	  ext = filter.split('-')[1];
	}

	if (cp !== undefined && cp !== 'undefined') {
		if (ext !== undefined && ext !== '') {				
			list = () =>  knex
			.select('CodigoPostal.Id','CodigoPostal.CodigoDistrito','CodigoPostal.CodigoConcelho','CodigoPostal.CodigoLocalidade',
					'CodigoPostal.NomeLocalidade','CodigoPostal.CodigoArteria','CodigoPostal.ArteriaTipo','CodigoPostal.PrimeiraPreposicao',
					'CodigoPostal.ArteriaTitulo','CodigoPostal.SegundaPreposicao','CodigoPostal.ArteriaDesignacao',
					'CodigoPostal.ArteriaInformacaoLocalZona','CodigoPostal.Troco','CodigoPostal.NumeroPorta','CodigoPostal.NomeCliente',
					'CodigoPostal.NumeroCodigoPostal','CodigoPostal.NumeroExtensaoCodigoPostal','CodigoPostal.DesignacaoPostal',
					'Distrito.Nome as NomeDistrito', 'Concelho.Nome as NomeConcelho')
			.from('CodigoPostal')
			.innerJoin('Distrito','Distrito.Codigo','CodigoPostal.CodigoDistrito')
			.innerJoin('Concelho', function() {
				this.on('Concelho.Codigo', '=', 'CodigoPostal.CodigoConcelho')
					.on('Concelho.CodigoDistrito', '=', 'CodigoPostal.CodigoDistrito')
			})
 		    .where('CodigoPostal.NumeroCodigoPostal', cp.toString())
			.andWhere('CodigoPostal.NumeroExtensaoCodigoPostal', ext.toString());
		} else {						
			list = () =>  knex
			.select('CodigoPostal.Id','CodigoPostal.CodigoDistrito','CodigoPostal.CodigoConcelho','CodigoPostal.CodigoLocalidade',
					'CodigoPostal.NomeLocalidade','CodigoPostal.CodigoArteria','CodigoPostal.ArteriaTipo','CodigoPostal.PrimeiraPreposicao',
					'CodigoPostal.ArteriaTitulo','CodigoPostal.SegundaPreposicao','CodigoPostal.ArteriaDesignacao',
					'CodigoPostal.ArteriaInformacaoLocalZona','CodigoPostal.Troco','CodigoPostal.NumeroPorta','CodigoPostal.NomeCliente',
					'CodigoPostal.NumeroCodigoPostal','CodigoPostal.NumeroExtensaoCodigoPostal','CodigoPostal.DesignacaoPostal',
					'Distrito.Nome as NomeDistrito', 'Concelho.Nome as NomeConcelho')
			.from('CodigoPostal')
			.innerJoin('Distrito','Distrito.Codigo','CodigoPostal.CodigoDistrito')
			.innerJoin('Concelho', function() {
				this.on('Concelho.Codigo', '=', 'CodigoPostal.CodigoConcelho')
					.on('Concelho.CodigoDistrito', '=', 'CodigoPostal.CodigoDistrito')
			})
			.where('CodigoPostal.NumeroCodigoPostal', cp.toString());
		}
	} else {				
		list = () =>  knex		
		.select('CodigoPostal.Id','CodigoPostal.CodigoDistrito','CodigoPostal.CodigoConcelho','CodigoPostal.CodigoLocalidade',
				'CodigoPostal.NomeLocalidade','CodigoPostal.CodigoArteria','CodigoPostal.ArteriaTipo','CodigoPostal.PrimeiraPreposicao',
				'CodigoPostal.ArteriaTitulo','CodigoPostal.SegundaPreposicao','CodigoPostal.ArteriaDesignacao',
				'CodigoPostal.ArteriaInformacaoLocalZona','CodigoPostal.Troco','CodigoPostal.NumeroPorta','CodigoPostal.NomeCliente',
				'CodigoPostal.NumeroCodigoPostal','CodigoPostal.NumeroExtensaoCodigoPostal','CodigoPostal.DesignacaoPostal',
				'Distrito.Nome as NomeDistrito', 'Concelho.Nome as NomeConcelho')
		.from('CodigoPostal')
		.innerJoin('Distrito','Distrito.Codigo','CodigoPostal.CodigoDistrito')
		.innerJoin('Concelho', function() {
			this.on('Concelho.Codigo', '=', 'CodigoPostal.CodigoConcelho')
				.on('Concelho.CodigoDistrito', '=', 'CodigoPostal.CodigoDistrito')
		})
		.limit(20);
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/morada/:filter', (req, res) => {

	const filter = req.params.filter;

	if (filter !== '' && filter !== undefined && filter !== 'undefined' && filter !== {filter} && filter !== '{filter}') {		
			list = () =>  knex
			.select('CodigoPostal.Id','CodigoPostal.CodigoDistrito','CodigoPostal.CodigoConcelho','CodigoPostal.CodigoLocalidade',
					'CodigoPostal.NomeLocalidade','CodigoPostal.CodigoArteria','CodigoPostal.ArteriaTipo','CodigoPostal.PrimeiraPreposicao',
					'CodigoPostal.ArteriaTitulo','CodigoPostal.SegundaPreposicao','CodigoPostal.ArteriaDesignacao',
					'CodigoPostal.ArteriaInformacaoLocalZona','CodigoPostal.Troco','CodigoPostal.NumeroPorta','CodigoPostal.NomeCliente',
					'CodigoPostal.NumeroCodigoPostal','CodigoPostal.NumeroExtensaoCodigoPostal','CodigoPostal.DesignacaoPostal',
					'Distrito.Nome as NomeDistrito', 'Concelho.Nome as NomeConcelho')
			.from('CodigoPostal')
			.innerJoin('Distrito','Distrito.Codigo','CodigoPostal.CodigoDistrito')
			.innerJoin('Concelho', function() {
				this.on('Concelho.Codigo', '=', 'CodigoPostal.CodigoConcelho')
					.on('Concelho.CodigoDistrito', '=', 'CodigoPostal.CodigoDistrito')
			})
			.where('CodigoPostal.ArteriaTitulo', 'like', '%'+filter+'%')
			.orWhere('CodigoPostal.NomeLocalidade', 'like', '%'+filter+'%')
			.orWhere('CodigoPostal.ArteriaDesignacao', 'like', '%'+filter+'%')			
			.orWhere('CodigoPostal.ArteriaTipo', 'like', '%'+filter+'%')
			.orWhere('CodigoPostal.NomeCliente', 'like', '%'+filter+'%')
			.orWhere('CodigoPostal.DesignacaoPostal', 'like', '%'+filter+'%')
			.orWhere('CodigoPostal.ArteriaInformacaoLocalZona', 'like', '%'+filter+'%');					   
	} else {				
		list = () =>  knex
		.select('CodigoPostal.Id','CodigoPostal.CodigoDistrito','CodigoPostal.CodigoConcelho','CodigoPostal.CodigoLocalidade',
				'CodigoPostal.NomeLocalidade','CodigoPostal.CodigoArteria','CodigoPostal.ArteriaTipo','CodigoPostal.PrimeiraPreposicao',
				'CodigoPostal.ArteriaTitulo','CodigoPostal.SegundaPreposicao','CodigoPostal.ArteriaDesignacao',
				'CodigoPostal.ArteriaInformacaoLocalZona','CodigoPostal.Troco','CodigoPostal.NumeroPorta','CodigoPostal.NomeCliente',
				'CodigoPostal.NumeroCodigoPostal','CodigoPostal.NumeroExtensaoCodigoPostal','CodigoPostal.DesignacaoPostal',
				'Distrito.Nome as NomeDistrito', 'Concelho.Nome as NomeConcelho')	
		.from('CodigoPostal')
		.innerJoin('Distrito','Distrito.Codigo','CodigoPostal.CodigoDistrito')
		.innerJoin('Concelho', function() {
			this.on('Concelho.Codigo', '=', 'CodigoPostal.CodigoConcelho')
				.on('Concelho.CodigoDistrito', '=', 'CodigoPostal.CodigoDistrito')
		})
	  .limit(20);
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`CTT REST API started on http://localhost:${port}\nPress Ctrl+C to terminate.`)
})
