"use strict";

// CONFIGURACION DE EXPRESS
// plugin usados
const express = require("express"),
  pug = require("pug"),
  bodyParser = require("body-parser"),
  session = require('express-session'),
  morgan = require("morgan"),
  restFul = require("express-method-override")("_method"), //variable oculta en el front de la aplicacion llamada '_method' para usar metodos de rest post, get , put , delete
  auth= require('./routes/auth-router'),
  routes = require("./routes/usuario-router"),
  errors = require('./middewares/errors'),
  favicon = require("serve-favicon")(`${__dirname}/public/favicon.ico`),
  publicDir = express.static(`${__dirname}/public`), // archivos de carpeta publica
  viewDir = `${__dirname}/views`, // directorio de vistas
  //puerto applicacion

  port = ( process.env.PORT || 2222),
 optSession= {secret: 'secreto', saveUninitialized: true, resave:true};
 // save Unini  --- destruir sesion
 // resave --- cualquiere reinicio de modulos se mantenga la sesion
 // secret     
let app = express();

// node .. metodos set -- establecer parametros
//                          get
//                            use

app
  .set("views", viewDir) //
  .set("view engine", "pug") // motor de vistas
  .set("port", port) // puerto  2222
  // definir middleware
  .use(bodyParser.json()) // para manipular el envio en formato json
  .use(session(optSession))
  .use(bodyParser.urlencoded({ extended: false })) //
  .use(publicDir)
  .use(favicon)
  .use(morgan("dev")) // mensajes en la consola de las peticiones al server
  .use(restFul)
  .use(routes)
  .use(routes)
  .use(errors.error404);

module.exports = app;
