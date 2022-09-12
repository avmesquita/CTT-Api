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
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/distrito/:filter', (req, res) => {
	
    filter = req.params.filter;
	
	if (filter != '' && filter != undefined) {
		list = () =>  knex('Distrito').select('Id','Codigo','Nome')
	                   .orWhere('Nome', 'like', '%'+filter+'%');
	} else {
		list = () =>  knex('Distrito').select('Id','Codigo','Nome')
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/distrito/', (req, res) => {
	
	list = () =>  knex('Distrito').select('Id','Codigo','Nome')
	
	list()
	.then(data => res.json(data)).catch(console.error);
})


app.get('/api/v1/concelho/:filter', (req, res) => {

	filter = req.params.filter;

	if (filter != '' && filter != undefined) {
		list = () =>  knex('Concelho').select('Id','CodigoDistrito','Codigo','Nome')	   
					   .orWhere('Nome', 'like', '%'+filter+'%');
	} else {
		list = () =>  knex('Concelho').select('Id','CodigoDistrito','Codigo','Nome')
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/concelho/', (req, res) => {

    list = () =>  knex('Concelho').select('Id','CodigoDistrito','Codigo','Nome');
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/codigopostal/:filter', (req, res) => {

	filter = req.params.filter;
	cp = filter.split('-')[0]
	ext = filter.split('-')[1];
	/*
	console.log(cp);
	console.log(ext);
	*/
	
	if (filter != '' && filter != undefined && ext != undefined) {
		list = () =>  knex('CodigoPostal')
						.select('Id','CodigoDistrito','CodigoConcelho','CodigoLocalidade','NomeLocalidade','CodigoArteria','ArteriaTipo','PrimeiraPreposicao','ArteriaTitulo','SegundaPreposicao','ArteriaDesignacao','ArteriaInformacaoLocalZona','Troco','NumeroPorta','NomeCliente','NumeroCodigoPostal','NumeroExtensaoCodigoPostal','DesignacaoPostal')
					   	.where('NumeroCodigoPostal', cp)
					    .andWhere('NumeroExtensaoCodigoPostal', ext);
	} else {
		list = () =>  knex('CodigoPostal')
						  .select('Id','CodigoDistrito','CodigoConcelho','CodigoLocalidade','NomeLocalidade',
								  'CodigoArteria','ArteriaTipo','PrimeiraPreposicao','ArteriaTitulo',
								  'SegundaPreposicao','ArteriaDesignacao','ArteriaInformacaoLocalZona',
								  'Troco','NumeroPorta','NomeCliente','NumeroCodigoPostal','NumeroExtensaoCodigoPostal',
								  'DesignacaoPostal').limit(20);
	}
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/codigopostal/', (req, res) => {

	list = () =>  knex('CodigoPostal')
					.select('Id','CodigoDistrito','CodigoConcelho','CodigoLocalidade','NomeLocalidade',
							'CodigoArteria','ArteriaTipo','PrimeiraPreposicao','ArteriaTitulo',
							'SegundaPreposicao','ArteriaDesignacao','ArteriaInformacaoLocalZona',
							'Troco','NumeroPorta','NomeCliente','NumeroCodigoPostal','NumeroExtensaoCodigoPostal',
							'DesignacaoPostal').limit(20);
	
	list()
	.then(data => res.json(data)).catch(console.error);
})

app.get('/api/v1/apartado/:filter', (req, res) => {

	filter = req.params.filter;

	if (filter != '' && filter != undefined) {
		list = () =>  knex('Apartado')
					   .select('Id','PostalOfficeIdentification','FirstPOBox','LastPOBox',
							   'PostalCode','PostalCodeExtension','PostalName','PostalCodeSpecial',
							   'PostalCodeSpecialExtension','PostalNameSpecial')	   
					   .orWhere('PostalCode', 'like', '%'+filter+'%');
	} else {
		list = () =>  knex('Apartado')
						.select('Id','PostalOfficeIdentification','FirstPOBox','LastPOBox',
								'PostalCode','PostalCodeExtension','PostalName','PostalCodeSpecial',
								'PostalCodeSpecialExtension','PostalNameSpecial')						
	}
	
	list()
	.then(data => res.json(data))
});

app.get('/api/v1/apartado/', (req, res) => {

	list = () =>  knex('Apartado')
	                .select('Id','PostalOfficeIdentification','FirstPOBox','LastPOBox',
							'PostalCode','PostalCodeExtension','PostalName','PostalCodeSpecial',
							'PostalCodeSpecialExtension','PostalNameSpecial')						
	list()
	.then(data => res.json(data))
})


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`CTT REST API started on http://localhost:${port}\nPress Ctrl+C to terminate.`)
})
