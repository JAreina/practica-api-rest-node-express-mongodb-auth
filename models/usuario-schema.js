'use strict';


// esquema similar a sql para crear la tabla de nombre usuario
const mongoose = require('./conexion'),
          Schema = mongoose.Schema,
          // crear la coleccion
          UsuarioSchema = new Schema({
              _id : Schema.Types.ObjectId,
              clave: String,
              nombre : String,
              correo: String,
                 ciudad: String
          },
        
        {
            collection : 'usuario'
        });


     let   Usuario = mongoose.model('Usuario', UsuarioSchema);


        module.exports= Usuario;