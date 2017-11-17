"use strict"

const app = require('./app'),
         server= app.listen( app.get('port'), () =>
         	console.log(`Iniciando API REST Express con MONGODB en puerto ${app.get('port')}`) );
