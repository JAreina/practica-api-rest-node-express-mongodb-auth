"use strict";

// esquema similar a sql para crear la tabla de nombre usuario
const mongoose = require("./conexion"),
  Schema = mongoose.Schema,
  // crear la coleccion o tabla
  AuthSchema = new Schema(
    {
      username: String,
      password: String
    },
    {
      // coleccion en la bd se llama auth
      collection: "autenticacion"
    }
  ),
  Auth = mongoose.model("Auth", AuthSchema);

module.exports = Auth;
