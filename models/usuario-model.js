"use strict";

const conn = require("./usuario-schema"); // conexion a mongo

class UsuarioModel {

  // FUNCION QUE EJECUTA EL CONTROLLADOR
  getTodo(cb) {
    conn.find({}, (err, docs) => {
      console.log(docs   +"MODELO");
      if (err) {
        throw err;
      } else {
        cb(err,docs); // callback 
      }
    }); // objeto vacio trae todo de la base de datos
  }


  // SELECCIONAR UN SOLO REGISTRO
  getUno( _id, cb ) {
    conn.findOne({ _id : _id }, (err,docs)=>{
      if(err) throw err;
			cb(_id,docs);
    });
  }

  //si no existe insert, si no actualiza
  save(data, cb) {
      // objeto lo que debe traer de la bd
          // buscar por ide y contar cuantos docs
         conn.count({_id : data._id},(err,count)=>{
                    //manejo de error 
                   if(err)  throw err;
                        console.log(`NÚMERO DOCS: ${count}`);

                              // si no existe crea
                   if(count == 0){
                     conn.create(data, (err)=>{
                       if (err) throw  err;
                       cb()
                     });
                     // si existe actualiza
                   }else if (count == 1){
                        conn.findOneAndUpdate(
                         
                          { _id : data._id },
                          {
                            clave : data.clave,
                            nombre : data.nombre,
                            correo : data.correo,
                            ciudad : data.ciudad
                          },
                          (err)=>{
                                 if(err)  throw (err);
                                 cb();
                          }
                        )
                   }
         });



  }

  delete( _id, cb ) {
    conn.remove({ _id : _id}, (err)=>{
               if(err) throw err;
               cb();
    });
  }
}

module.exports = UsuarioModel;
